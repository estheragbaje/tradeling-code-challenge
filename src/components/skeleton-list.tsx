/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { gridStyle } from '../global-styles'
import { UserCardSkeleton } from './user-card-skeleton'

export const SkeletonList: React.FC = () => {
  return (
    <div css={gridStyle}>
      <UserCardSkeleton />
      <UserCardSkeleton />
      <UserCardSkeleton />
    </div>
  )
}
