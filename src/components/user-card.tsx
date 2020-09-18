/**@jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import React from 'react'
import { LocationIcon, TwitterIcon } from '../icons'
import { cardStyle, flexStyle, textStyle, headingStyle } from '../global-styles'

interface GithubUser {
  avatar_url: string
  login: string
  name: string
  location: string
  bio: string
  html_url: string
  public_repos: number
  followers: number
  following: number
  twitter_username: string
}

interface UserCardProps {
  data: GithubUser
}

export const UserCard: React.FC<UserCardProps> = ({ data }) => (
  <div css={cardStyle}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <a href={data.html_url}>
        <img
          src="https://avatars3.githubusercontent.com/u/583231?v=4"
          alt={data.name}
          height="50px"
          style={{ borderRadius: '10000px' }}
        />
      </a>
      <div style={{ paddingLeft: '20px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <a target="_blank" css={headingStyle} href={data.html_url}>
            {data.name}
          </a>
          <p style={{ color: '#3182CE', margin: ' 0px', paddingLeft: '10px' }}>
            {data.login}
          </p>
        </div>
        <div css={flexStyle}>
          <LocationIcon color="#3182CE" height="20px" />
          <p style={{ paddingLeft: '10px', margin: '10px 0px' }}>
            {data.location}
          </p>
        </div>
      </div>
    </div>
    <div css={textStyle}>
      <p style={{ margin: '0px' }}>{data.bio}</p>
    </div>

    <div css={flexStyle}>
      <TwitterIcon color="#3182CE" height="20px" />
      <a
        target="_blank"
        css={textStyle}
        style={{ paddingLeft: '10px', textDecoration: 'none', color: '#000' }}
        href={`https://twitter.com/${data.twitter_username}`}
      >
        @{data.twitter_username}
      </a>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '300px',
      }}
    >
      <p css={textStyle}>{data.followers} Followers</p>
      <p css={textStyle}>{data.following} Following</p>
      <p css={textStyle}>{data.public_repos} Repos</p>
    </div>
  </div>
)

export default UserCard
