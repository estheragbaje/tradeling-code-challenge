/**@jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { RepoList } from './components/repo-list'
import { Search } from './components/search'
import { SkeletonList } from './components/skeleton-list'
import { UserList } from './components/user-list'
import { containerStyle, errorStyle } from './global-styles'
import { ErrorIcon, GithubIcon } from './icons'
import { RootState } from './redux/store'
import theme from './theme'

const { colors, spacing, fontSizes } = theme

const Status = ({ status }) => {
  if (status === 'fetching') return <SkeletonList />

  if (status === 'idle') return <p> </p>

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

  const isCentered = status === 'idle' || searchQuery === ''

  return (
    <main style={{ backgroundColor: colors.gray.lightest, minHeight: '100vh' }}>
      <div css={containerStyle}>
        <div>
          <div style={{ paddingTop: spacing.xxxl, paddingBottom: spacing.xxl }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: isCentered ? 'center' : 'flex-start',
                marginBottom: spacing.lg,
              }}
            >
              <GithubIcon style={{ fontSize: '40px', marginRight: '16px' }} />
              <div>
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: fontSizes.lg,
                    lineHeight: 1,
                  }}
                >
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
