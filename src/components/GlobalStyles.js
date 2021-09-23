import { createGlobalStyle } from "styled-components";
import Reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${Reset};

  /* colors */
  :root {
    --dark: #262223;
    --red: #D2302C;
    --white: #F7F7F9;
  }

  * {
    box-sizing : border-box;
    color: var(--dark);
    font-family: 'Noto Serif KR', serif;
  }
  
  html {
    margin : 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--white);
  }
  
  body{
    margin: 0;
    padding: 0;
    font-family: 'Noto Serif KR', serif;
  }
  
  a {
    color: var(--dark);
    text-decoration:none;
  }
  
  input,
  textarea,
  button {
    color: var(--dark);
    border: none;
    outline: none;
    font-family: 'Noto Serif KR', serif;
  }
  
  button {
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }
  
  ul,
  ol,
  li {
    list-style: none;
  }

`;

export default GlobalStyles;
