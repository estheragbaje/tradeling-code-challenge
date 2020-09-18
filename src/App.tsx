/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { Navbar } from './components/nav-bar'
import { UserList } from './components/user-list'
import { containerStyle, headlineStyle } from './global-styles'
import { users } from './data'
import { Search } from './components/search'

const App: React.FC = () => (
  <div>
    <Navbar />
    <div css={containerStyle}>
      <p css={headlineStyle}>Search users or repositories below</p>
      <Search />
    </div>
    <UserList data={users} />
  </div>
)

export default App
