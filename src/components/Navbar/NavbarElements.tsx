
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Nav = styled.nav<{ isScrolling: boolean }>`
  display: flex;
  float:left;
  box-sizing: border-box;
  position: relative;
  justify-content: space-between;
  width:100%;
  padding-left: 7%;
  padding-right: 5%;
  padding-top: 10px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isScrolling }) =>
    isScrolling ? "translateY(0)" : "translateY(-100%)"};
  z-index: 999;
  @media screen and (max-width: 786px){
    padding-left: 10px;
    padding-right: 5%;
  }
`;

export const NameLink = styled(Link)`
  font-size:30px;
  font-family:cursive;
  font-weight:bold;
  color: inherit;
  text-decoration: none;
    &:hover{cursor:default}
`

export const NavContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: center;
`
export const Anchor = styled.a`
color: inherit;
  text-decoration: none;
  padding: 5px`


export const NavMenu = styled.div`
  align-self: center;
  padding-left: 15px;
  width: 40px;
  z-index: 1001;
`

export const NavLink = styled(Link)`
  font-size:20px;
  justify-self: flex-end;
  font-weight:bold;
  float:left;
  color: white;
  padding: 5px;
  color: #b3b3b3;
  text-decoration: none;
    &:hover{cursor:default}
`

export const Sidenav = styled.div<{ isScrolling: boolean }>`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  position: fixed;
  padding-top: 10%;
  opacity: 90%;
  z-index: 998;
  line-height: 40px;
  display: flex;
  text-align: center;
  flex-direction: column; // New line
  align-items: center; // New line
  background-color: rgb(15 23 42);
  @media screen and (max-width: 786px){
    padding-top: 30%;
  }
`;