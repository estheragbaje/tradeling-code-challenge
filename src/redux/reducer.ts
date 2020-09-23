import { Octokit } from '@octokit/rest'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { RootState } from './store'

/**
 * Create an github api client (fetcher)
 */
const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_API })

/**
 * Create an object for the github APIs we need
 */
const githubAPI = {
  getUserDetails: (username: string) =>
    octokit.users.getByUsername({ username }),
  searchUser: (username: string) =>
    octokit.search.users({ q: username, per_page: 6 }),
  searchRepo: (repo: string) => octokit.search.repos({ q: repo, per_page: 6 }),
}

/**
 * Simple object cache to store returned value from API
 *
 * key - `{type}:${searchQuery}`
 * value - API result
 *
 * I could possibly put this in localStorage as well.
 */
const cache: { [key: string]: any[] } = {}

/**
 * Create a thunk for fetching user
 *
 * It makes it easy to handle the promise lifecycles (pending, resolved, rejected)
 * @see https://redux-toolkit.js.org/api/createAsyncThunk
 */
export const fetchByQuery = createAsyncThunk(
  'query/fetchByQuery',
  async (query: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState

    // Create a unique cache key to store the returned API value
    const cacheKey = `${state.app.type}:${query}`

    // Check if key exists in cache, and return the cached value
    // to avoid over-fetching
    if (cacheKey in cache) {
      return cache[cacheKey]
    }

    if (state.app.type === 'repo') {
      const response = await githubAPI.searchRepo(query)
      const repos = response.data.items

      // Save the returned value in cache
      cache[cacheKey] = repos
      return repos
    }

    /**
     * Get the users that match the query
     */
    const { data } = await githubAPI.searchUser(query)

    /**
     * Use the returned user login to fetch more details about
     * the user. The returned value from search above doesn't contain
     * all the needed details
     */
    const users = await Promise.all(
      data.items.map(async (user) => {
        const res = await githubAPI.getUserDetails(user.login)
        return res.data
      })
    )

    // Save the returned value in cache
    cache[cacheKey] = users

    return users
  }
)

/**
 * Create state and reducer
 * @see https://redux-toolkit.js.org/api/createSlice
 */
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
      /**
       * Requirement: Clear result when input is empty
       * or less than 3 characters
       */
      if (inputValue === '' || inputValue.length < 3) {
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

  /**
   * The builder API is used to ensure types work correctly for async reducers
   * @see https://redux-toolkit.js.org/usage/usage-with-typescript#building-type-safe-reducer-argument-objects
   */
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
