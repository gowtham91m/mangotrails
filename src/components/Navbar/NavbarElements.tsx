
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  z-index: 999;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  z-index: 12;
`;


export const NavMenu = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
    z-index:998
  }
`;

export const NavContact = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`

export const NavLink = styled(Link)`
text-decoration: None;
color: ${(props) => props.theme.text};
&:hover{cursor:default;
        text-decoration:underline;
        text-underline-offset:10px}
`
