/**@jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { cardStyle, headingStyle, lineClampStyle } from '../styles'
import { ErrorIcon, ForkIcon, RepoIcon, StartIcon } from '../icons'
import theme from '../theme'

const { spacing } = theme

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
  id: number
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
      <div css={{ flex: 1 }}>
        <div>
          <div>
            <div
              css={{
                display: 'flex',
                alignItems: 'flex-start',
                paddingBottom: spacing.sm,
              }}
            >
              <RepoIcon css={{ height: spacing.md, flexShrink: 0 }} />
              <a
                href={data.html_url}
                target="_blank"
                css={[
                  headingStyle,
                  {
                    textDecoration: 'none',
                    paddingLeft: spacing.sm,
                    lineHeight: 1.2,
                    wordBreak: 'break-word',
                  },
                ]}
              >
                {data.full_name}
              </a>
            </div>
            {data.language && (
              <div css={iconTextStyle}>
                <div
                  css={{
                    width: spacing.sm,
                    height: spacing.sm,
                    flexShrink: 0,
                    borderRadius: '999px',
                    backgroundColor: '#C53030',
                  }}
                />
                <p css={{ paddingLeft: spacing.sm, margin: '10px 0px' }}>
                  {data.language}
                </p>
              </div>
            )}
          </div>
        </div>
        {data.description && <p css={lineClampStyle}>{data.description}</p>}
      </div>

      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '24px',
          marginBottom: '16px',
          maxWidth: '256px',
        }}
      >
        <div css={iconTextStyle}>
          <StartIcon height="20px" />
          <p css={{ paddingLeft: '10px' }}>
            <b>{data.stargazers_count}</b>
          </p>
        </div>
        <div css={iconTextStyle}>
          <ForkIcon height="20px" />
          <p css={{ paddingLeft: '10px' }}>
            <b>{data.forks_count}</b>
          </p>
        </div>
        <div css={iconTextStyle}>
          <ErrorIcon height="20px" />
          <p css={{ paddingLeft: '10px' }}>
            <b>{data.open_issues_count}</b>
          </p>
        </div>
      </div>
      <div
        css={{
          display: 'flex',
        }}
      >
        <p> Owned by, {data.name}</p>
        <a href={data.html_url} target="_blank">
          <img
            src={data.owner.avatar_url}
            alt={data.name}
            height="30px"
            css={{ borderRadius: '10000px', marginLeft: '10px' }}
          />
        </a>
      </div>
    </div>
  )
}

export default RepositoryCard
