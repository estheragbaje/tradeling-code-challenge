/**@jsx jsx */
import { jsx, css } from '@emotion/core'

const mobile = '@media(max-width: 460px)'
const tablet = '@media(max-width: 768px)'

export const cardStyle = css({
  backgroundColor: '#white',
  padding: '20px',
  // maxWidth: '340px',
  [tablet]: {
    minWidth: '230px',
  },
  [mobile]: {
    minWidth: '200px',
  },
  border: '1px solid #D9D9D9',
  borderRadius: '5px',
  boxShadow:
    'inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2)',
})

export const headingStyle = css({
  textDecoration: 'none',
  color: '#3182CE',
  fontSize: '24px',
  margin: '0px ',
  fontWeight: 600,
})

export const flexStyle = css({
  display: 'flex',
  alignItems: 'center',
})

export const textStyle = css({
  margin: '8px 0px',
})

export const aStyle = css({
  borderRadius: '4px',
  border: 'solid 1px #D9D9D9',
  background: '#F9FAFB',
  color: '#686868',
  padding: '8px 12px',
  textDecoration: 'none',
  target: '_blank',
  fontWeight: 600,
  ':hover': {
    color: '#095BCB',
  },
})
