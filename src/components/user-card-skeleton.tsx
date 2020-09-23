/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { skeletonStyles } from '../styles'

export const UserCardSkeleton = () => {
  return (
    <div css={skeletonStyles}>
      <div className="top-section ">
        <div className="image animate" />
        <div className="text animate" />
      </div>
      <div className="bottom-text animate" />
    </div>
  )
}
