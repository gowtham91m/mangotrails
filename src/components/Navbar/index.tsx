import React from 'react';
import {
    Nav,
    NavContact,
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
                <NavLink to={'/'} >Gowtham</NavLink>

            <NavContact>
                <Anchor href='https://www.linkedin.com/in/gowtham-mallikarjuna/' target="_blank">
                    <AiOutlineLinkedin size={25} /></Anchor>
                <Anchor href='https://github.com/gowtham91m' target="_blank">
                    <AiFillGithub size={25} /></Anchor>
                <ToggleSwitch toggleTheme={toggleTheme} />
            </NavContact>
        </Nav>
    );
};

export default Navbar;