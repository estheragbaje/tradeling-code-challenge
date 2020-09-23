/**@jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { gridStyle } from '../styles'
import RepositoryCard, { GithubRepo } from './repository-card'

interface RepoListProps {
  data: GithubRepo[]
}

export const RepoList: React.FC<RepoListProps> = ({ data }) => {
  return (
    <div css={gridStyle}>
      {data.length > 0 &&
        data.map((item) => <RepositoryCard data={item} key={item.id} />)}
    </div>
  )
}
