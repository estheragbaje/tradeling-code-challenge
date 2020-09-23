/**@jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import theme from './theme'

const { spacing, colors, fontSizes } = theme

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
  backgroundColor: 'white',
  padding: spacing.md,
  minHeight: 60,
  borderRadius: spacing.sm,
  boxShadow: '0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)',
  display: 'flex',
  flexDirection: 'column',
})

export const headingStyle = css({
  textDecoration: 'none',
  color: '#3182CE',
  fontSize: fontSizes.md,
  margin: '0px ',
  fontWeight: 700,
  overflow: 'hidden',
})

export const flexStyle = css({
  display: 'flex',
  alignItems: 'flex-start',
})

export const textStyle = css({
  margin: '8px 0px',
})

export const aStyle = css({
  borderRadius: spacing.xs,
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
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: spacing.md,
  [tablet]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [mobile]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
})

export const containerStyle = css({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 30px',
})

export const headlineStyle = css({
  fontSize: fontSizes.xxxl,
  margin: '5px 0px',
  fontWeight: 500,
  color: '#28A745',
  [tablet]: {
    fontSize: fontSizes.xxl,
  },
  [mobile]: {
    fontSize: fontSizes.lg,
  },
})

export const errorStyle = css(flexStyle, {
  color: '#721c24',
  backgroundColor: '#f8d7da',
  borderColor: '#f5c6cb',
  padding: spacing.md,
  borderRadius: spacing.sm,
  '.error-icon': {
    width: spacing.lg,
  },
  '.error-text': {
    fontSize: fontSizes.md,
    paddingLeft: spacing.sm,
  },
})

export const skeletonStyles = css({
  padding: spacing.md,
  backgroundColor: '#F7FAFC',
  borderRadius: spacing.xs,
  height: 160,
  '.top-section': {
    display: 'flex',
    alignItems: 'center',
  },
  '.image': {
    width: spacing.xxl,
    height: spacing.xxl,
    borderRadius: 9999,
    marginRight: spacing.md,
    backgroundColor: '#EDF2F7',
    flexShrink: 0,
  },
  '.text': {
    height: spacing.lg,
    width: '100%',
    backgroundColor: '#EDF2F7',
  },
  '.bottom-text': {
    height: 70,
    width: '100%',
    marginTop: spacing.md,
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
    display: 'block',
  },
})

export const lineClampStyle = css({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
})

export const searchStyle = css({
  borderWidth: 1,
  borderRadius: spacing.sm,
  boxShadow: '0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)',
  paddingLeft: spacing.md,
  paddingRight: spacing.md,
  paddingTop: spacing.md,
  paddingBottom: spacing.md,
  border: 'none',
  width: '100%',
  maxWidth: 400,
  [tablet]: {
    maxWidth: 240,
  },
  [mobile]: {
    maxWidth: 100,
  },
})

export const selectStyle = css({
  borderWidth: 1,
  borderRadius: spacing.sm,
  boxShadow: '0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)',
  paddingLeft: spacing.md,
  paddingRight: spacing.md,
  paddingTop: spacing.md,
  paddingBottom: spacing.md,
  border: 'none',
  width: '100%',
  maxWidth: 150,
  marginLeft: spacing.sm,
  color: colors.gray.light,
  backgroundColor: 'white',
})
