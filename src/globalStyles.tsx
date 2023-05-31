import { url } from 'inspector';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    z-index:1;
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0 auto;
    /* max-width:1800px; */
    width:100%;
    left: 0;
    right: 0;
}`

export default GlobalStyle;


