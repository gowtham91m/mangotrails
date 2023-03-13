import React from 'react';
import {
    Nav,
    NavLogo,
    NavContact,
    MobileNavContact,
    NavLink,
    Anchor
} from './NavbarElements';
import ToggleSwitch from '../ToggleSwitch'
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'
import { useTheme } from '@material-ui/core/styles';


type Props = {
    toggleTheme: () => void;
}

const Navbar: React.FC<Props> = ({ toggleTheme }) => {
    const theme = useTheme();
    const backgroundColor = theme.palette.type;

    return (
        <Nav backgroundColor={backgroundColor}>
            <NavLogo>
                <ul><NavLink to={'/'} >Gowtham</NavLink></ul>
            </NavLogo>

            <NavContact>
                <Anchor href='https://www.linkedin.com/in/gowtham-mallikarjuna/' target="_blank">
                    <AiOutlineLinkedin size={25} /></Anchor>
                <Anchor href='https://github.com/gowtham91m' target="_blank">
                    <AiFillGithub size={25} /></Anchor>
                <ToggleSwitch toggleTheme={toggleTheme} />
            </NavContact>

            <MobileNavContact>
                <Anchor href='https://www.linkedin.com/in/gowtham-mallikarjuna/' target="_blank">
                    <AiOutlineLinkedin size={25} /></Anchor>
                <Anchor href='https://github.com/gowtham91m' target="_blank">
                    <AiFillGithub size={25} /></Anchor>
                <ToggleSwitch toggleTheme={toggleTheme} />
            </MobileNavContact>
        </Nav>
    );
};

export default Navbar;