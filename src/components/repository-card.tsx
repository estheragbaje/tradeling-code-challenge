/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { cardStyle, headingStyle, flexStyle, gridStyle } from '../global-styles'
import { ErrorIcon, ForkIcon, RepoIcon, StartIcon } from '../icons'

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

const RepositoryCard: React.FC<RepoCardProps> = ({ data }) => (
  <div css={cardStyle}>
    <div>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <RepoIcon height="20px" />
          <a href={data.html_url} style={{ textDecoration: 'none' }}>
            <p
              style={{
                paddingLeft: '10px',
                fontSize: '28px',
                maxWidth: '130px',
              }}
            >
              {data.full_name}
            </p>
          </a>
        </div>

        <div css={iconTextStyle}>
          <div
            style={{
              width: '10px',
              height: '10px',
              flexShrink: 0,
              borderRadius: '999px',
              backgroundColor: '#C53030',
            }}
          />
          <p style={{ paddingLeft: '10px' }}>{data.language}</p>
        </div>
      </div>
    </div>
    <p style={{ margin: '10px 0px' }}>{data.description}</p>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        // maxWidth: '250px',
        marginTop: '10px',
      }}
    >
      <div css={iconTextStyle}>
        <StartIcon height="20px" />
        <p style={{ paddingLeft: '10px' }}>{data.stargazers_count}</p>
      </div>
      <div css={iconTextStyle}>
        <ForkIcon height="20px" />
        <p style={{ paddingLeft: '10px' }}>{data.forks_count}</p>
      </div>
      <div css={iconTextStyle}>
        <ErrorIcon height="20px" />
        <p style={{ paddingLeft: '10px' }}>{data.open_issues_count}</p>
      </div>
    </div>
    <div
    // style={{
    //   maxWidth: '300px',
    //   display: 'flex',
    //   // alignItems: 'center',
    // }}
    >
      <p style={{ margin: '0' }}> Owned by, {data.name}</p>
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

export default RepositoryCard
