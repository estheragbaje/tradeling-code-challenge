/**@jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { gridStyle } from '../styles'
import UserCard, { GithubUser } from './user-card'

interface UserListProps {
  data: GithubUser[]
}

export const UserList: React.FC<UserListProps> = ({ data }) => {
  return (
    <div css={gridStyle}>
      {data.map((item) => (
        <UserCard data={item} key={item.id} />
      ))}
    </div>
  )
}
