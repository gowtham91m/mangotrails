
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  z-index: 999;
`;

export const NavContainer = styled.div`
display:flex;
justify-content: space-between;
`

export const NavLogo = styled.div`
justify-self: flex-start;
    height:150px;
`

export const NavName = styled.div`
  font-size:30px;
  justify-self: flex-end;
  font-family:cursive;
  font-weight:bold;
`

export const NavLink = styled(Link)`
    text-decoration: None;
    color: ${(props) => props.theme.text};
    &:hover{cursor:default;
        text-decoration:underline;
        text-underline-offset:10px}
      @media screen and (max-width: 768px) {
        color:white;
  }
`

export const NavContact = styled.div`
  width: 100px;
  display: flex;
  padding-right: 10px;
  justify-content: space-between;
`

export const NavTabs = styled.div`
  display: flex;
  padding-right: 10px;
  @media screen and (max-width: 768px) {
    display:none;
  }
    z-index:998
`;


export const MobileMenuIcon = styled.div`
display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position:absolute;
    right:5px;
    padding-left:10px;
    padding-top: 10px;
  }
`


export const MobileNavContainer = styled.div`
  display:none;
@media screen and (max-width: 767px){
  position: absolute;
  justify-content: center;
  border-radius: 60px;
  top: 100px;
  padding-right: 30px;
  padding-top: 80px;
  left: 50px;
  height: 40%;
  width: 70%;
  display: flex;
  background-color:black;
  opacity: 85%;
  z-index:997;
}
`

export const MobileNavMenu = styled.div`
display:none;
@media screen and (max-width: 767px){
  color:black;
  justify-content: space-between;
}
`

export const MobileNavTabs = styled.div`
  display: block;
  font-weight: bold;
`



