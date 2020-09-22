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
  white: '#ffffff',
  clementine: '#ed6600',
  grenadier: '#d34b00',
  blueBayoux: '#475d73',
  osloGray: '#82888d',
  bunker: '#13171c',
  bunkerDark: '#0a0c0f',
  blue: '#0000ff',
  monza: '#d20724',
  woodsmoke: '#141618',
}
