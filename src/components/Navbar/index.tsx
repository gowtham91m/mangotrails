import React, { useState } from 'react';
import {
    Nav,
    NavContainer,
    NavLogo,
    NavName,
    NavTabs,
    NavLink,
    NavContact,
    MobileNavTabs,
    MobileNavContainer,
    Backdrop,
    MobileNavContact
} from './NavbarElements';
import ToggleSwitch from '../ToggleSwitch'
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'
import GitHubIcon from '@mui/icons-material/GitHub';
import { FcMenu } from 'react-icons/fc';


type Props = {
    toggleTheme: () => void;
}

const Contact: React.FC<Props> = ({ toggleTheme }) => {
    return (
        <NavContact>
            <a href='https://www.linkedin.com/in/gowtham-mallikarjuna/' target="_blank">
                <AiOutlineLinkedin size={25} /></a>
            <a href='https://github.com/gowtham91m' target="_blank">
                <AiFillGithub size={25} /></a>
            <ToggleSwitch toggleTheme={toggleTheme} />
        </NavContact>
    )
}



const Navbar: React.FC<Props> = ({ toggleTheme }) => {
    const [isSideNavOpen, setSideNavOpen] = useState(false);
    
    const MobileContact: React.FC<Props> = ({ toggleTheme }) => {
        return (
            <MobileNavContact>
                <FcMenu size={30} onClick={() => { setSideNavOpen(!isSideNavOpen) }} />
                <a href='https://www.linkedin.com/in/gowtham-mallikarjuna/' target="_blank">
                    <AiOutlineLinkedin size={25} /></a>
                <a href='https://github.com/gowtham91m' target="_blank">
                    <AiFillGithub size={25} /></a>
                <ToggleSwitch toggleTheme={toggleTheme} />

            </MobileNavContact>
        )
    }

    return (
            <Nav >
                <NavLogo>
                    <NavName>Gowtham</NavName>
                </NavLogo>

                <NavContainer >
                    <NavTabs >
                        <ul><NavLink to={'/'}>About</NavLink></ul>
                        <ul><NavLink to={'/codelab'}>Codelab</NavLink></ul>
                        <ul><NavLink to={'/leasure'}>Leasure</NavLink></ul>
                        <ul><Contact toggleTheme={toggleTheme} /></ul>
                    </NavTabs>
                </NavContainer>

                <MobileContact toggleTheme={toggleTheme} />

                {isSideNavOpen && (
                    <>
                    <Backdrop onClick={() => { setSideNavOpen(!isSideNavOpen) }} />
                    <MobileNavContainer onClick={() => { setSideNavOpen(!isSideNavOpen) }} >
                        <MobileNavTabs>
                            <ul><NavLink to={'/'} onClick={() => { setSideNavOpen(!isSideNavOpen) }}>About</NavLink></ul>
                            <ul><NavLink to={'/codelab'} onClick={() => { setSideNavOpen(!isSideNavOpen) }}>Codelab</NavLink></ul>
                            <ul><NavLink to={'/leasure'} onClick={() => { setSideNavOpen(!isSideNavOpen) }}>Leasure</NavLink></ul>
                        </MobileNavTabs>
                    </MobileNavContainer>
                    </>
                )}
            </Nav>
    );
};

export default Navbar;