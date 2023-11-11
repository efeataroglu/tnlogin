import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.colors.body};
  font-family: 'Open Sans', sans-serif;
  font-size: 1.15em;
}

img{
  max-width:100%;
}

`;

export default GlobalStyles;
