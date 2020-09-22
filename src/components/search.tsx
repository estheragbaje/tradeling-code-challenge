/**@jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import debounce from 'lodash.debounce'
import { useDispatch, useSelector } from 'react-redux'
import { fetchByQuery, setType, setQuery } from '../redux/reducer'
import { RootState } from '../redux/store'
import { searchStyle, selectStyle } from '../global-styles'
import theme from '../theme'

const { spacing } = theme

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
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        css={searchStyle}
      />
      <select
        name="search"
        id="fields"
        style={{ paddingLeft: spacing.lsm, maxWidth: '100px' }}
        onChange={(e) => {
          const value = e.target.value
          dispatch(setType(value))

          if (searchQuery.length > 2) {
            search(searchQuery)
          }
        }}
        css={selectStyle}
      >
        <option value="user">Users</option>
        <option value="repo">Repositories</option>
      </select>
    </div>
  )
}
