
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Nav = styled.nav<{ backgroundColor: string, isScrolling: boolean }>`
  height:50px;
  background: ${props => props.backgroundColor};
  display: flex;
  float:left;
  justify-content: left;
  position:fixed;
  /* padding-right: 5%; */
  /* padding-left: 5%; */
  padding-top: 10px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isScrolling }) =>
    isScrolling ? "translateY(0)" : "translateY(-100%)"};
  z-index: 999;
  @media screen and (max-width: 786px){
    padding-left: 5%;
  }
`;

export const NavMenu = styled.div`
  display:flex;
  width: 15%;
  float:left;
`
export const EmptyDiv = styled.div`
  width:85%;
`

export const NameLink = styled(Link)`
  font-size:30px;
  justify-self: flex-end;
  font-family:cursive;
  float:left;
  font-weight:bold;
  color: inherit;
  text-decoration: none;
    &:hover{cursor:default}
`

export const NavLink = styled(Link)`
  font-size:15px;
  justify-self: flex-end;
  /* font-family:cursive; */
  float:left;
  /* font-weight:bold; */
  color: white;
  text-decoration: none;
    &:hover{cursor:default}
`

export const NavContact = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
`
export const Anchor = styled.a`
color: inherit;
  text-decoration: none;`




export const Sidenav = styled.div`
  width: 200px;
  height: 100%;
  /* padding: 5%; */
  float: right;
  
  position: fixed;
  margin-left: 0%;
  margin-top: 50px;
  background-color: black;
  opacity: 90%;
  z-index: 999;
`;

export const SidenavContainer = styled.div`
  margin: 0 auto;
`;

export const SideMenuItem = styled.li`
  list-style: none;
  font-size: 20px;
  color: white;
  padding: 10px;
`;

export const UL = styled.ul`
  display: block;
  padding: 30px;
`;