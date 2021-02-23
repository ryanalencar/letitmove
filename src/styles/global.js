import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.colors.text};
  }

  body,input,textarea,button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor:pointer;
  }

  a {
    text-decoration:none;
    color: inherit;
  }

  @media(max-width: 1000px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`
