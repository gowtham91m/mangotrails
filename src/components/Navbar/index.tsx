import React, { useState } from 'react';
import {
    Nav,
    NavContainer,
    NavLogo,
    NavName,
    NavTabs,
    NavLink,
    NavContact,
    MobileMenuIcon,
    MobileNavTabs,
    MobileNavContainer,
    Backdrop
} from './NavbarElements';
import ToggleSwitch from '../ToggleSwitch'
import LinkedInTile from '../../images/LinkedinTile.svg'
import Github from '../../images/Github.svg'
import { CgMenuMotion } from 'react-icons/cg';
import ProfilePic from '../../images/ProfilePic.png'




type Props = {
    toggleTheme: () => void;
}

const Contact: React.FC<Props> = ({ toggleTheme }) => {
    return (
        <NavContact>
            <a href='https://www.linkedin.com/in/gowtham-mallikarjuna/' target="_blank">
                <img src={LinkedInTile} style={{ height: 25, width: 25 }} ></img></a>
            <a href='https://github.com/gowtham91m' target="_blank">
                <img src={Github} style={{ height: 25, width: 25 }} ></img></a>
            <ToggleSwitch toggleTheme={toggleTheme} />
            
        </NavContact>
    )
}



const Navbar: React.FC<Props> = ({ toggleTheme }) => {
    const [isSideNavOpen, setSideNavOpen] = useState(false);
    
    return (
        <>
            <Nav onClick={() => { setSideNavOpen(!isSideNavOpen) }} >
                
                <NavLogo>
                    <NavName>Gowtham</NavName>
                </NavLogo>
                

                <MobileMenuIcon>
                    <CgMenuMotion size={40}/>
                </MobileMenuIcon>

                <NavContainer>
                    <NavTabs>
                        <ul><NavLink to={'/'}>About</NavLink></ul>
                        <ul><NavLink to={'/codelab'}>Codelab</NavLink></ul>
                        <ul><NavLink to={'/artroom'}>Artroom</NavLink></ul>
                        <ul><NavLink to={'/leasure'}>Leasure</NavLink></ul>
                        <ul><Contact toggleTheme={toggleTheme} /></ul>
                    </NavTabs>
                </NavContainer>

                

                {isSideNavOpen && (
                    <>
                    <Backdrop onClick={() => { setSideNavOpen(!isSideNavOpen) }} />
                    <MobileNavContainer>
                        <MobileNavTabs>
                            <ul><NavLink to={'/'}>About</NavLink></ul>
                            <ul><NavLink to={'/experience'}>Experience</NavLink></ul>
                            <ul><NavLink to={'/codelab'}>Codelab</NavLink></ul>
                            <ul><NavLink to={'/artroom'}>Artroom</NavLink></ul>
                            <ul><NavLink to={'/leasure'}>Leasure</NavLink></ul>
                            <ul><Contact toggleTheme={toggleTheme} /></ul>
                        </MobileNavTabs>
                    </MobileNavContainer>
                    </>
                )}
            </Nav>
        </>
    );
};

export default Navbar;