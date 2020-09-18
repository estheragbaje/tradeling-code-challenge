/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { Navbar } from './components/nav-bar'
import { UserList } from './components/user-list'
import { containerStyle, headlineStyle, errorStyle } from './global-styles'
import { users } from './data'
import { Search } from './components/search'
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
  </div>
)

export default App
