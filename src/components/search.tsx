/**@jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import debounce from 'lodash.debounce'
import { useDispatch, useSelector } from 'react-redux'
import { fetchByQuery, setType, setQuery } from '../redux/reducer'
import { RootState } from '../redux/store'
import { searchStyle } from '../global-styles'

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

  const [inputValue, setInputValue] = React.useState('')

  const debounceSearch = debounce((value: string) => {
    dispatch(setQuery(value))
    if (value.length > 2) {
      search(value)
    }
  }, 250)

  React.useEffect(() => {
    debounceSearch(inputValue)
  }, [inputValue])

  return (
    <div>
      <input
        type="text"
        placeholder="Start typing to search..."
        // style={{ padding: '10px', fontSize: '16px' }}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        css={searchStyle}
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
        <option value="user">Users</option>
        <option value="repo">Repos</option>
      </select>
    </div>
  )
}
