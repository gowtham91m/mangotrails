import React from 'react';
import {
    Nav,
    NavMenu,
    NavLink,
} from './NavbarElements';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import LinkedInTile from '../../images/linkedin-tile.svg'
import ProfilePic from '../../images/ProfilePic.png'


type Props = {
    toggleTheme: () => void;
}

const Navbar: React.FC<Props> = ({toggleTheme}) => {
    return (
        <>
            <Nav>
                <img src={ProfilePic} style={{ height: 150, width: 150 }}></img>
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