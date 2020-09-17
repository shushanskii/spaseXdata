import { generateMedia } from 'styled-media-query'

export const LIST_PAGE_LIMIT = 10

export enum WIDTHS {
  DESKTOP = '1120px',
  TABLET = '640px',
  MOBILE = '286px',
}

export const MEDIA = generateMedia({
  desktop: '1119px',
  tablet: '641px',
  mobile: WIDTHS.MOBILE,
})

// http://chir.ag/projects/name-that-color/
export const colors = {
  black: '#000000',
  pink: '#cc6d8f',
  pigmentIndigo: '#48007d',
  white: '#ffffff',
  clementine: '#ed6600',
  grenadier: '#d34b00',
  blueBayoux: '#475d73',
  dawn: '#a5a3a1',
  osloGray: '#82888d',
  violet: '#1c0745',
  bunker: '#13171c',
  bunkerDark: '#0a0c0f',
  potPourri: '#f5e6e6',
  dustyGray: '#979797',
  mako: '#3c4248',
  alto: '#d3d3d3',
  altoDark: '#d8d8d8',
  blue: '#0000ff',
  monza: '#d20724',
}
