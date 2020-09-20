import { Octokit } from '@octokit/rest'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const octokit = new Octokit()

const githubAPI = {
  getUserDetails: (username: string) =>
    octokit.users.getByUsername({ username }),
  searchUser: (username: string) =>
    octokit.search.users({ q: username, per_page: 5 }),
  searchRepo: (repo: string) => octokit.search.repos({ q: repo, per_page: 5 }),
}

export const fetchByQuery = createAsyncThunk(
  'users/fetchByQuery',
  async (query: string, thunkAPI) => {
    const state = thunkAPI.getState()

    if (state.app.type === 'repo') {
      const response = await githubAPI.searchRepo(query)
      return response.data.items
    }

    const { data } = await githubAPI.searchUser(query)

    const response = await Promise.all(
      data.items.map(async (user) => {
        const res = await githubAPI.getUserDetails(user.login)
        return res.data
      })
    )

    return response
  }
)

const app = createSlice({
  name: 'app',
  initialState: {
    type: 'user',
    result: [],
    status: 'idle',
    searchQuery: '',
    errorMessage: null,
  },
  reducers: {
    setQuery: (state, action) => {
      const inputValue = action.payload
      state.searchQuery = inputValue
      if (inputValue === '') {
        state.result = []
      }
    },
    clearResult: (state) => {
      state.result = []
    },
    setType: (state, action) => {
      state.type = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchByQuery.fulfilled, (state, action) => {
      // returned data from API
      const data = action.payload
      // update/mutate state with the data
      state.result = data
      state.status = 'success'
    })
    builder.addCase(fetchByQuery.pending, (state) => {
      state.status = 'fetching'
      state.result = []
    })
    builder.addCase(fetchByQuery.rejected, (state, action) => {
      state.status = 'error'
      state.errorMessage = action.error
    })
  },
})

export const { setQuery, clearResult, setType } = app.actions

export const reducer = combineReducers({
  app: app.reducer,
})
