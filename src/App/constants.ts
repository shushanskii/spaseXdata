import { generateMedia } from 'styled-media-query'

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
  osloGray: '#82888d',
  gallery: '#eeeeee',
  catskillWhite: '#E3EBF1',
  chetwodeBlue: '#8884D8',
  red: '#FF0000',
}
