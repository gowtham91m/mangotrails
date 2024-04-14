import React, { useState, useEffect } from "react";
import { Nav, NavLink, Sidenav, UL, NavMenu, NameLink } from "./NavbarElements";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from "@material-ui/core/styles";

type Props = {
  toggleTheme: () => void;
};

const Navbar = () => {
  const theme = useTheme();
  const backgroundColor = theme.palette.type;
    const [scrollPos, setScrollPos] = useState(1);
    const [isScrolling, setIsScrolling] = useState(true);
  const [isSideNavOpen, setSideNavOpen] = useState(false);

    const handleScroll = () => {
        setScrollPos(document.body.getBoundingClientRect().top);
        setIsScrolling(document.body.getBoundingClientRect().top > scrollPos);
      setSideNavOpen(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPos]);


    
  return (
    <>
    <Nav
      backgroundColor={backgroundColor}
          isScrolling={isScrolling}
    >
        <NavMenu>
        <GiHamburgerMenu onClick={() => setSideNavOpen(!isSideNavOpen)} />
        </NavMenu>
          <NameLink to={'/'} >Gowtham</NameLink>
        {/* <EmptyDiv></EmptyDiv> */}
      </Nav>

      {/* <NavContact>
        <GiHamburgerMenu onClick={openSideNav}/>
        <Anchor
          href="https://www.linkedin.com/in/gowtham-mallikarjuna/"
          target="_blank"
        >
          <AiOutlineLinkedin size={25} />
        </Anchor>
        <Anchor href="https://github.com/gowtham91m" target="_blank">
          <AiFillGithub size={25} />
        </Anchor>
        <ToggleSwitch toggleTheme={toggleTheme} />    
      </NavContact> */}

   

      {isSideNavOpen && <Sidenav isScrolling={isScrolling}>

        <UL>
          <li>
            <NavLink to="/" onClick={() => setSideNavOpen(!isSideNavOpen)}>Home</NavLink></li>
            <li>
            <NavLink to="/About" onClick={() => setSideNavOpen(!isSideNavOpen)}>About</NavLink></li>
          <li>
            <NavLink to="/PersonalInterests" onClick={() => setSideNavOpen(!isSideNavOpen)}>PersonalInterests</NavLink></li>
            <li>
            <NavLink to="/AppDevelopment" onClick={() => setSideNavOpen(!isSideNavOpen)}>AppDevelopment</NavLink></li>
            <li>
            <NavLink to="/ArtGallery" onClick={() => setSideNavOpen(!isSideNavOpen)}>ArtGallery</NavLink></li>
        </UL>
          </Sidenav>}
    </>
  );
};

export default Navbar;