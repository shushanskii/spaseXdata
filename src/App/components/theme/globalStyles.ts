import { createGlobalStyle } from 'styled-components'
import { colors } from 'app/constants'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif, sans-serif;
    color: ${colors.osloGray};
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  a {
    color: inherit;
    text-decoration: inherit;
  
    &:active, &:hover, &:visited {
      color: inherit;
      text-decoration: inherit;
    }
  }
`
