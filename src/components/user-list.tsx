/**@jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import React from 'react'
import UserCard from './user-card'
import { gridStyle } from '../global-styles'
import { GithubUser } from './user-card'

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
