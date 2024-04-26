
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Nav = styled.nav<{ isScrolling: boolean }>`
  height:50px;
  display: flex;
  float:left;
  justify-content: space-between;
  width:100%;
  position: fixed;
  padding-left: 5%;
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
  height: 100%;
  position: fixed;
  padding-top: 15%;
  margin-top: 50px;
  opacity: 90%;
  z-index: 1000;
  display: flex;
  text-align: center;
  list-style:none;
  flex-direction: column; // New line
  align-items: center; // New line
`;
