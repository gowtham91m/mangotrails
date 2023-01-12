import React from 'react';
import {
    Nav,
    NavMenu,
    NavLink,
} from './NavbarElements';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import LinkedInTile from '../../images/linkedin-tile.svg'

const Navbar = ({toggleTheme}) => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <ul><NavLink to={'/'}>About</NavLink></ul>
                    <ul><NavLink to={'/experience'}>Experience</NavLink></ul>
                    <ul><NavLink to={'/codelab'}>Codelab</NavLink></ul>
                    <ul><NavLink to={'/artroom'}>Artroom</NavLink></ul>
                    <ul><NavLink to={'/leasure'}>Leasure</NavLink></ul>
                    <ul><a href='https://www.linkedin.com/in/gowtham-mallikarjuna/' target="_blank">
                        <img src={LinkedInTile} style={{ height: 25, width: 25 }} ></img></a></ul>
                    <ul><ToggleSwitch toggleTheme={toggleTheme}/></ul>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;