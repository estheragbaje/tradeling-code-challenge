// Dummy data for UI before fetching from API

export const user = {
  login: 'octocat',
  id: 1,
  node_id: 'MDQ6VXNlcjE=',
  avatar_url:
    'https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
  gravatar_id: '',
  url: 'https://api.github.com/users/octocat',
  html_url: 'https://github.com/octocat',
  followers_url: 'https://api.github.com/users/octocat/followers',
  following_url: 'https://api.github.com/users/octocat/following{/other_user}',
  gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
  organizations_url: 'https://api.github.com/users/octocat/orgs',
  repos_url: 'https://api.github.com/users/octocat/repos',
  events_url: 'https://api.github.com/users/octocat/events{/privacy}',
  received_events_url: 'https://api.github.com/users/octocat/received_events',
  type: 'User',
  site_admin: false,
  name: 'monalisa octocat',
  company: 'GitHub',
  blog: 'https://github.com/blog',
  location: 'San Francisco',
  email: 'octocat@github.com',
  hireable: false,
  bio: 'There once was...',
  twitter_username: 'fadfa',
  public_repos: 2,
  public_gists: 1,
  followers: 20,
  following: 0,
  created_at: '2008-01-14T04:33:35Z',
  updated_at: '2008-01-14T04:33:35Z',
}

export const users = [user, user, user]

export const repo = {
  id: 3081286,
  node_id: 'MDEwOlJlcG9zaXRvcnkzMDgxMjg2',
  name: 'Tetris',
  full_name: 'dtrupenn/Tetriskdfakfiaofoaeidfdafadfadoj',
  owner: {
    login: 'dtrupenn',
    id: 872147,
    node_id: 'MDQ6VXNlcjg3MjE0Nw==',
    avatar_url:
      'https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
    gravatar_id: '',
    url: 'https://api.github.com/users/dtrupenn',
    received_events_url:
      'https://api.github.com/users/dtrupenn/received_events',
    type: 'User',
  },
  private: false,
  html_url: 'https://github.com/dtrupenn/Tetris',
  description:
    'A C implementation of Tetris using Pennsim through LC4 A C implementation of Tetris using Pennsim through LC4 A C implementation of Tetris using Pennsim through LC4 A C implementation of Tetris using Pennsim through LC4',
  fork: false,
  url: 'https://api.github.com/repos/dtrupenn/Tetris',
  created_at: '2012-01-01T00:31:50Z',
  updated_at: '2013-01-05T17:58:47Z',
  pushed_at: '2012-01-01T00:37:02Z',
  homepage: '',
  size: 524,
  stargazers_count: 1,
  watchers_count: 1,
  language: 'Assembly',
  forks_count: 0,
  open_issues_count: 0,
  master_branch: 'master',
  default_branch: 'master',
  score: 1.0,
}

export const repos = [repo, repo, repo]
