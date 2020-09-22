/**@jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'

const navStyle = css({
  backgroundColor: '#24292E',
  padding: '12px',
})

export const Navbar: React.FC = () => (
  <nav css={navStyle}>
    <div>
      {/* <img
        src="../logo.png"
        alt="github logo"
        style={{ paddingLeft: '10px' }}
      /> */}
    </div>
  </nav>
)
