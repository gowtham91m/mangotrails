import React, { useState, useEffect } from "react";
import {
  Nav,
  NavContact,
  Anchor,
  NameLink,
  NavMenu,
  Sidenav,
  NavLink,
} from "./NavbarElements";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

const Navbar = () => {
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
    <div style={{ width: "100%" }}>
      <Nav isScrolling={isScrolling}>
        <NameLink to={"/"}>Gowtham</NameLink>
        <NavContact>
          <div style={{width:"100%"}}></div>
          <Anchor
            href="https://www.linkedin.com/in/gowtham-mallikarjuna/"
            target="_blank"
          >
            <AiOutlineLinkedin size={25} />
          </Anchor>
          <Anchor href="https://github.com/gowtham91m" target="_blank">
            <AiFillGithub size={25} />
          </Anchor>
          <NavMenu>
            <GiHamburgerMenu onClick={() => setSideNavOpen(!isSideNavOpen)} />
          </NavMenu>
        </NavContact>
      </Nav>

      {isSideNavOpen && (
        <Sidenav isScrolling={isScrolling}>
          <NavLink to="/" onClick={() => setSideNavOpen(!isSideNavOpen)}>
            Home
          </NavLink>
          <NavLink
            to="/PersonalInterests"
            onClick={() => setSideNavOpen(!isSideNavOpen)}
          >
            PersonalInterests
          </NavLink>
          <NavLink
            to="/AppDevelopment"
            onClick={() => setSideNavOpen(!isSideNavOpen)}
          >
            AppDevelopment
          </NavLink>
          <NavLink
            to="/ArtGallery"
            onClick={() => setSideNavOpen(!isSideNavOpen)}
          >
            ArtGallery
          </NavLink>
        </Sidenav>
      )}
    </div>
  );
};

export default Navbar;
