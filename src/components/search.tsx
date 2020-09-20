/**@jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchByQuery, setType } from '../redux/reducer'
import { RootState } from '../redux/store'

export const Search: React.FC = () => {
  const app = useSelector((state: RootState) => state.app)
  const { searchQuery } = app

  const dispatch = useDispatch()

  const search = async (query) => {
    try {
      await dispatch(fetchByQuery(query))
    } catch (err) {
      console.log(err)
      console.log('there was an error fetching')
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Start typing to search..."
        style={{ padding: '10px', fontSize: '16px' }}
        value={searchQuery}
        onChange={(e) => {
          const value = e.target.value
          dispatch(setType(value))

          if (searchQuery.length > 2) {
            search(searchQuery)
          }
        }}
      />
      <select
        name="search"
        id="fields"
        style={{ padding: '10px', marginLeft: '10px' }}
        onChange={(e) => {
          const value = e.target.value
          dispatch(setType(value))

          if (searchQuery.length > 2) {
            search(searchQuery)
          }
        }}
      >
        <option value="users">Users</option>
        <option value="repositories">Repos</option>
      </select>
    </div>
  )
}
