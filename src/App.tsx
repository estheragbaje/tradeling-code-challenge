/**@jsx jsx */
import { jsx } from '@emotion/core'
import './index.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from './components/nav-bar'
import { RepoList } from './components/repo-list'
import { Search } from './components/search'
import { SkeletonList } from './components/skeleton-list'
import { UserList } from './components/user-list'
import { repos, users } from './data'
import { containerStyle, errorStyle, headlineStyle } from './global-styles'
import { ErrorIcon } from './icons'
import { RootState } from './redux/store'

const Status = ({ status }) => {
  if (status === 'fetching') return <SkeletonList />

  if (status === 'idle') return <p>Type to search user...</p>

  if (status === 'error')
    return (
      <div css={errorStyle}>
        <ErrorIcon className="error-icon" />
        <p className="error-text">Error fetching data</p>
      </div>
    )

  return null
}

const App: React.FC = () => {
  const app = useSelector((state: RootState) => state.app)
  const { result, status, type, searchQuery } = app

  return (
    <div>
      <Navbar />
      <div css={containerStyle}>
        <p css={headlineStyle}>Search users or repositories below</p>
        <Search />
      </div>
      {/* <Status status={status} />
      {type === 'repo' ? (
        <RepoList data={result} />
      ) : (
        <UserList data={result} />
      )} */}
      {/* <UserList data={users} /> */}
      <RepoList data={repos} />
    </div>
  )
}

export default App
