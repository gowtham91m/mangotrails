
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Nav = styled.nav<{ isScrolling: boolean }>`
  height:50px;
  display: flex;
  float:left;
  justify-content: left;
  position: fixed;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 10px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isScrolling }) =>
    isScrolling ? "translateY(0)" : "translateY(-100%)"};
  z-index: 999;
  @media screen and (max-width: 786px){
    padding-left: 5px;
    padding-right: 5px;
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
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-self: center;
`
export const Anchor = styled.a`
color: inherit;
  text-decoration: none;`


export const NavMenu = styled.div`
  align-self: center;
  width: 40px;
  z-index: 1001;
`

export const NavLink = styled(Link)`
  font-size:20px;
  justify-self: flex-end;
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
`;

export const SideNavContent = styled.div`
`;

// export const SidenavContainer = styled.div`
//   margin: 0 auto;
// `;

// export const SideMenuItem = styled.li`
//   list-style: none;
//   font-size: 20px;
//   color: white;
// `;

