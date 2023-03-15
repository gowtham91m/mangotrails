import React, { useState, useEffect } from 'react';
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

    const [scrollPos, setScrollPos] = useState(0);
    const [isNavHidden, setIsNavHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrolledDown = currentScrollPos > scrollPos;

            // If user scrolls down and the navbar is not hidden, hide it
            if (isScrolledDown && !isNavHidden) {
                setIsNavHidden(true);
            }

            // If user scrolls up and the navbar is hidden, show it
            if (!isScrolledDown && isNavHidden) {
                setIsNavHidden(false);
            }

            // Update the scroll position
            setScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPos, isNavHidden]);

    return (
        <Nav backgroundColor={backgroundColor} className={isNavHidden ? 'hidden' : ''}>
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