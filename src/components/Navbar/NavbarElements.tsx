
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Nav = styled.nav<{ backgroundColor: string }>`
  height:50px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  position:fixed;
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 10px;
  z-index: 999;
  @media screen and (max-width: 786px){
    padding-left: 5%;
  }
`;


export const NavLink = styled(Link)`
  font-size:30px;
  justify-self: flex-end;
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

`

export const MobileNavContact = styled.div`
  display: none;
  @media screen and (max-width: 786px){
  display: table-cell;
  justify-content: center;
  align-items: right;
  right: 0px;
  height: 20%;
  width: 50px;
  padding-right: 1%;
  z-index:997;
  }
`

export const Anchor = styled.a`
color: inherit;
  text-decoration: none;`