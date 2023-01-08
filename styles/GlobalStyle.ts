import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${(props) => props.theme.colors.background}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.colors.primaryHover};
    }
  }

  input {
    border: 0;
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  <!--
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: black;
    }
  }
  -->
`;

export default GlobalStyle;
