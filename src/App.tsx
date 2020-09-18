import React from 'react'
import { Navbar } from './components/nav-bar'
import { UserList } from './components/user-list'
import { users } from './data'

const App: React.FC = () => (
  <div>
    <Navbar />
    <UserList data={users} />
  </div>
)

export default App
