import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;

  font-family: sans-serif;

  background-color: #0a0c0f;
}

input {
  border: none;

  &:focus {
    outline: 0;
  }
}

#root {
  width: 100%;
  height: 100%;
}
`
