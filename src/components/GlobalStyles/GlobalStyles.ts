import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* VARS */
  :root{
    --font-stack: "Cormorant", serif;
    --white: #fff;
    --black: #000;
    --yellow-1: #FFCA49;
    --grey-1: #cccccc;
    --grey-2: #f5f5f5;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--grey-2);
  }
`;