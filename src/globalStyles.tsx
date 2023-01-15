import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    z-index:1;
    font-family: 'Source Sans Pro', sans-serif;
}`

export default GlobalStyle;


export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
  }
`