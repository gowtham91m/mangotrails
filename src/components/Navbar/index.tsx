import React, { useState, useEffect } from "react";
import { Nav, NavContact, NavLink, EmptyDiv, Anchor, Sidenav, SidenavContainer, SideMenuItem, UL, NavMenu, NameLink } from "./NavbarElements";
import ToggleSwitch from "../ToggleSwitch";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from "@material-ui/core/styles";
import Constants from '../../Constants';
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPos]);

  function OnClickBackdrop() {
    setSideNavOpen(false);
  }
  
  const openSideNav = () => {
    setSideNavOpen(true);
  };

    
  return (
    <>
    <Nav
      backgroundColor={backgroundColor}
          isScrolling={isScrolling}
    >
        <NavMenu>
        <GiHamburgerMenu onClick={() => setSideNavOpen(!isSideNavOpen)} />
          <NameLink to={'/'} >Gowtham</NameLink>
        </NavMenu>
        <EmptyDiv></EmptyDiv>
        

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

   
        
    </Nav>
      {isSideNavOpen && <Sidenav>
        <p>test</p>
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