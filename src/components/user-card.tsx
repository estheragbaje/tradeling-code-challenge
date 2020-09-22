/**@jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import React from 'react'
import { LocationIcon, TwitterIcon } from '../icons'
import {
  cardStyle,
  flexStyle,
  textStyle,
  headingStyle,
  responsiveFlex,
} from '../global-styles'
import theme from '../theme'

const { colors, spacing, fontSizes } = theme

export interface GithubUser {
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

export const UserCard: React.FC<UserCardProps> = ({ data }) => {
  return (
    <div css={cardStyle}>
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          <a href={data.html_url}>
            <img
              src={
                data.avatar_url ||
                'https://avatars3.githubusercontent.com/u/583231?v=4'
              }
              alt={data.name}
              height="50px"
              style={{ borderRadius: '10000px' }}
            />
          </a>
          <div style={{ paddingLeft: '20px' }}>
            {data.name && (
              <div css={responsiveFlex}>
                <a target="_blank" css={headingStyle} href={data.html_url}>
                  {data.name}
                </a>
              </div>
            )}

            <p style={{ lineHeight: 1, color: colors.gray.light }}>
              {data.login}
            </p>
            {data.location && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 8,
                }}
              >
                <LocationIcon color="#3182CE" height="14px" width="14px" />
                <p style={{ marginLeft: '4px', fontSize: '12px' }}>
                  {data.location}
                </p>
              </div>
            )}
          </div>
        </div>

        <div css={textStyle}>{data.bio && <p>{data.bio}</p>}</div>
        {data.twitter_username && (
          <div
            style={{ maxWidth: '300px', display: 'flex', alignItems: 'center' }}
          >
            <TwitterIcon color="#1DA1F2" height="20px" />
            <a
              target="_blank"
              css={textStyle}
              style={{
                paddingLeft: '10px',
                textDecoration: 'none',
                color: '#000',
              }}
              href={`https://twitter.com/${data.twitter_username}`}
            >
              @{data.twitter_username}
            </a>
          </div>
        )}
      </div>

      <div css={responsiveFlex} style={{ maxWidth: '300px' }}>
        <p css={textStyle}>
          <b>{data.followers}</b> Followers
        </p>
        <p css={textStyle}>
          <b>{data.following}</b> Following
        </p>
        <p css={textStyle}>
          <b>{data.public_repos}</b> Repos
        </p>
      </div>
    </div>
  )
}

export default UserCard
