import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background: #020114;
    color: white;
  }
  * {
    box-sizing: border-box;
  }

  h1{
    margin: auto;
  }
    h2{
    font-size: 22px;
    margin: 0;
    }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;