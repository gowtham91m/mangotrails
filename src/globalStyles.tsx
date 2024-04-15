import { url } from 'inspector';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    z-index:1;
    font-family: 'Source Sans Pro', sans-serif;
    max-width:1600px;
    color: #b3b3b3;
    background-color: rgb(15 23 42);
}`

export default GlobalStyle;


