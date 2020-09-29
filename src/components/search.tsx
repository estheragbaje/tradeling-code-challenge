/**@jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { useDebounce } from 'use-debounce'
import { useDispatch, useSelector } from 'react-redux'
import { fetchByQuery, setType, setQuery } from '../redux/reducer'
import { RootState } from '../redux/store'
import { searchStyle, selectStyle } from '../styles'

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * Idea stolen from: https://stackoverflow.com/a/55075818/1526448
 */
const useUpdateEffect: typeof React.useEffect = (effect, dependencies = []) => {
  const isInitialMount = React.useRef(true)

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      effect()
    }
  }, dependencies)
}

export const Search: React.FC = () => {
  const app = useSelector((state: RootState) => state.app)
  const { searchQuery, type, status } = app

  /**
   * React hook to manage debounce of search query
   * @see https://github.com/xnimorz/use-debounce
   */

  const [debouncedSearchQuery] = useDebounce(searchQuery, 1000)

  const dispatch = useDispatch()

  const isCentered = status === 'idle' || searchQuery === ''

  const search = async (query) => {
    try {
      await dispatch(fetchByQuery(query))
    } catch (err) {
      console.log(err)
      console.log('there was an error fetching')
    }
  }

  /**
   * React.useEffect(() => {}, []): Mount only
   * React.useEffect(() => {}, [value]): Mount + when value changes
   * useUpdateEffect(() => {}, []): When value changes only
   */

  /**
   * Perform search only when the debounced search query changes, not on mount
   */

  useUpdateEffect(() => {
    if (debouncedSearchQuery.length > 2) {
      search(debouncedSearchQuery)
    }
  }, [debouncedSearchQuery])

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: isCentered ? 'center' : undefined,
      }}
    >
      <input
        type="text"
        placeholder="Start typing to search..."
        value={searchQuery}
        onChange={(e) => {
          dispatch(setQuery(e.target.value))
        }}
        css={searchStyle}
      />
      <select
        name="search"
        id="fields"
        value={type}
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
