import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  :focus-visible {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
  }
  ::-webkit-scrollbar {
  width: .8rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: .8rem;
    background-color: ${({ theme }) => theme['gray-600']};
  }

  *, *::before, *::after {
      box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }


  img, picture, svg, video {
    display: block;
    max-width: 100%
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-100']};
  }

  #root {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }


  @media (max-width: 768px) {
  :root {
    font-size: 50%;
  }
}
`
