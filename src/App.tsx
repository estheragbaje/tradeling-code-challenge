/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from './components/nav-bar'
import { RepoList } from './components/repo-list'
import { Search } from './components/search'
import { SkeletonList } from './components/skeleton-list'
import { UserList } from './components/user-list'
import { repos, users } from './data'
import {
  containerStyle,
  errorStyle,
  flexStyle,
  headlineStyle,
} from './global-styles'
import { ErrorIcon, GithubIcon } from './icons'
import { RootState } from './redux/store'
import theme from './theme'

const { colors } = theme

const Status = ({ status }) => {
  if (status === 'fetching') return <SkeletonList />

  if (status === 'idle') return <p></p>

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
    <main style={{ backgroundColor: colors.gray.lightest, minHeight: '100vh' }}>
      <div css={containerStyle}>
        <div>
          <div style={{ paddingTop: '64px', paddingBottom: '48px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '24px',
              }}
            >
              <GithubIcon style={{ fontSize: '40px', marginRight: '16px' }} />
              <div>
                <p style={{ fontWeight: 800, fontSize: '18px', lineHeight: 1 }}>
                  Github Searcher
                </p>
                <p>Search users or repositories below</p>
              </div>
            </div>
            <Search />
          </div>
        </div>

        <Status status={status} />
        {type === 'repo' ? (
        <RepoList data={result} />
      ) : (
        <UserList data={result} />
      )}
        {/* <UserList data={users} /> */}
        {/* <RepoList data={repos} /> */}
      </div>
    </main>
  )
}

export default App
