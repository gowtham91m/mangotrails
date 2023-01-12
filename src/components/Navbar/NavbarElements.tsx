
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  z-index: 12;
`;

export const NavLink = styled(Link)`
text-decoration: None;
color: black;
`

export const Bars = styled.div`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: -30px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 10vw; */
  @media screen and (max-width: 7px) {
    display: none;
  }
`;