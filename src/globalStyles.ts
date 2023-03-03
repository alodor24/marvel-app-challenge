import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
  }

  main {
    min-height: calc(100vh - 276.3px);
  }
`;

export default GlobalStyle;
