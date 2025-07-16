import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Playball&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Lexend Deca', sans-serif;
    background-color: #FFFFFF;
  }
`;

export default GlobalStyle;
