/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'

export const Search: React.FC = () => (
  <div>
    <input
      type="text"
      placeholder="Start typing to search..."
      style={{ padding: '10px', fontSize: '16px' }}
    />
    <select
      name="search"
      id="fields"
      style={{ padding: '10px', marginLeft: '10px' }}
    >
      <option value="users">Users</option>
      <option value="repositories">Repos</option>
    </select>
  </div>
)
