/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { cardStyle, headingStyle, flexStyle, gridStyle } from '../global-styles'
import { ErrorIcon, ForkIcon, RepoIcon, StartIcon } from '../icons'
import theme from '../theme'

const { colors, spacing, fontSizes } = theme

export interface GithubRepo {
  full_name: string
  description: string
  name: string
  language: string
  forks_count: number
  stargazers_count: number
  url: string
  html_url: string
  open_issues_count: number
  owner: {
    avatar_url: string
  }
}

interface RepoCardProps {
  data: GithubRepo
}

const iconTextStyle = css({
  display: 'flex',
  alignItems: 'center',
})

const RepositoryCard: React.FC<RepoCardProps> = ({ data }) => {
  const max_length: number = 90
  return (
    <div css={cardStyle}>
      <div style={{ flex: 1 }}>
        <div>
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                paddingBottom: spacing.sm,
              }}
            >
              <RepoIcon style={{ height: spacing.md, flexShrink: 0 }} />
              <a
                href={data.html_url}
                target="_blank"
                style={{
                  textDecoration: 'none',
                  paddingLeft: spacing.sm,
                  lineHeight: 1.2,
                  wordBreak: 'break-word',
                }}
                css={headingStyle}
              >
                {data.full_name}
              </a>
            </div>
            {data.language && (
              <div css={iconTextStyle}>
                <div
                  style={{
                    width: spacing.sm,
                    height: spacing.sm,
                    flexShrink: 0,
                    borderRadius: '999px',
                    backgroundColor: '#C53030',
                  }}
                />
                <p style={{ paddingLeft: spacing.sm, margin: '10px 0px' }}>
                  {data.language}
                </p>
              </div>
            )}
          </div>
        </div>
        {data.description && <p>{data.description.slice(0, max_length)}...</p>}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '24px',
          marginBottom: '16px',
        }}
      >
        <div css={iconTextStyle}>
          <StartIcon height="20px" />
          <p style={{ paddingLeft: '10px' }}>
            <b>{data.stargazers_count}</b>
          </p>
        </div>
        <div css={iconTextStyle}>
          <ForkIcon height="20px" />
          <p style={{ paddingLeft: '10px' }}>
            <b>{data.forks_count}</b>
          </p>
        </div>
        <div css={iconTextStyle}>
          <ErrorIcon height="20px" />
          <p style={{ paddingLeft: '10px' }}>
            <b>{data.open_issues_count}</b>
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <p> Owned by, {data.name}</p>
        <a href={data.html_url} target="_blank">
          <img
            src={data.owner.avatar_url}
            alt={data.name}
            height="30px"
            style={{ borderRadius: '10000px', marginLeft: '10px' }}
          />
        </a>
      </div>
    </div>
  )
}

export default RepositoryCard
