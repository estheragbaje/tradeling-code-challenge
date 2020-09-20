/**@jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Navbar } from './components/nav-bar'
import { RepoList } from './components/repo-list'
import { Search } from './components/search'
import { SkeletonList } from './components/skeleton-list'
import { UserList } from './components/user-list'
import { repos, users } from './data'
import { containerStyle, errorStyle, headlineStyle } from './global-styles'
import { ErrorIcon } from './icons'

const App: React.FC = () => (
  <div>
    <Navbar />
    <div css={containerStyle}>
      <p css={headlineStyle}>Search users or repositories below</p>
      <Search />
    </div>
    <UserList data={users} />
    <div css={errorStyle}>
      <ErrorIcon className="error-icon" />
      <p className="error-text">Error fetching data</p>
    </div>
    <SkeletonList />
    <RepoList data={repos} />
  </div>
)

export default App
