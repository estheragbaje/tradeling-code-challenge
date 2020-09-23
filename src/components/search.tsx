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

  const [inputValue, setInputValue] = React.useState(searchQuery)

  const debounceSearch = debounce((value: string) => {
    dispatch(setQuery(value))
    if (value.length > 2) {
      search(value)
    }
  }, 250)

  /**
   * React.useEffect(() => {}, []): Mount only
   * React.useEffect(() => {}, [value]): Mount + when value changes
   * useUpdateEffect(() => {}, []): When value changes only
   */

  /**
   * Perform search only when the input value changes, not on mount
   */
  useUpdateEffect(() => {
    debounceSearch(inputValue)
  }, [inputValue])

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
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
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
        style={{ paddingLeft: spacing.md }}
        css={selectStyle}
      >
        <option value="user">Users</option>
        <option value="repo">Repositories</option>
      </select>
    </div>
  )
}
