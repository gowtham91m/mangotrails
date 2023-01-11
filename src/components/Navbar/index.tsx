import React from 'react';
import {
    Nav,
    Bars,
    NavMenu,
    NavBtn,
    NavLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <ul><NavLink to={'/'}>About</NavLink></ul>
                    <ul><NavLink to={'/experience'}>Experience</NavLink></ul>
                    <ul><NavLink to={'/codelab'}>Codelab</NavLink></ul>
                    <ul><NavLink to={'/artroom'}>Artroom</NavLink></ul>
                    <ul><NavLink to={'/leasure'}>Leasure</NavLink></ul>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;