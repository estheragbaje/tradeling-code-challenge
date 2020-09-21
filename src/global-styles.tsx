/**@jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

const mobile = '@media(max-width: 460px)'
const tablet = '@media(max-width: 768px)'

const shimmer = keyframes({
  '0%': {
    backgroundPosition: '-1000px 0',
  },
  '100%': {
    backgroundPosition: '1000px 0',
  },
})

export const cardStyle = css({
  backgroundColor: '#white',
  padding: '20px',
  maxWidth: '350px',
  minHeight: '240px',
  [tablet]: {
    maxWidth: '230px',
    // minHeight: '350px',
  },
  [mobile]: {
    maxWidth: '200px',
    // minHeight: '350px',
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
  maxWidth: '180px',
})

export const flexStyle = css({
  display: 'flex',
  alignItems: 'baseline',
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

export const gridStyle = css({
  display: 'grid',
  gridColumnGap: '30px',
  padding: '30px 30px',
  gridRowGap: '30px',
  gridTemplateColumns: 'auto auto auto',
  [tablet]: {
    gridTemplateColumns: 'auto auto',
    padding: '16px',
    gridColumnGap: '16px',
    gridRowGap: '16px',
  },
  [mobile]: {
    gridTemplateColumns: 'auto',
    padding: '10px',
    gridColumnGap: '10px',
    gridRowGap: '10px',
  },
})

export const containerStyle = css({
  padding: '24px 48px',
})

export const headlineStyle = css({
  fontSize: '28px',
  margin: '5px 0px',
  fontWeight: 500,
  color: '#28A745',
  [tablet]: {
    fontSize: '24px',
  },
  [mobile]: {
    fontSize: '18px',
  },
})

export const errorStyle = css(flexStyle, {
  color: '#721c24',
  backgroundColor: '#f8d7da',
  borderColor: '#f5c6cb',
  padding: 12,
  margin: 48,
  '.error-icon': {
    width: 24,
  },
  '.error-text': {
    fontSize: 16,
    paddingLeft: 10,
  },
})

export const skeletonStyles = css({
  padding: 20,
  backgroundColor: '#F7FAFC',
  borderRadius: 5,
  height: 160,
  '.top-section': {
    display: 'flex',
    alignItems: 'center',
  },
  '.image': {
    width: 50,
    height: 50,
    borderRadius: 9999,
    marginRight: 20,
    backgroundColor: '#EDF2F7',
    flexShrink: 0,
  },
  '.text': {
    height: 24,
    width: '100%',
    backgroundColor: '#EDF2F7',
  },
  '.bottom-text': {
    height: 70,
    width: '100%',
    marginTop: '20px',
    backgroundColor: '#EDF2F7',
  },
  '.animate': {
    animation: `${shimmer} 2s infinite`,
    background:
      'linear-gradient(to right, #EDF2F7 4%, #E2E8F0 25%, #EDF2F7 36%)',
    backgroundSize: '1000px 100%',
  },
})

export const responsiveFlex = css({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  [tablet]: {
    display: 'inline-block',
    padding: '0px',
  },
  [mobile]: {
    display: 'inline-block',
    padding: '0px',
  },
})
