import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { StyledNavbar, StyledNavbarLink } from "./style";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <StyledNavbar>
      <StyledNavbarLink
        aria-label="Go to Home Section"
        href="#"
        onClick={() => setActiveNav("#")}
        state={activeNav === "#" ? "active" : undefined}
      >
        <AiOutlineHome />
      </StyledNavbarLink>
      <StyledNavbarLink
        aria-label="Go to About Section"
        href="#about"
        onClick={() => setActiveNav("#about")}
        state={activeNav === "#about" ? "active" : undefined}
      >
        <AiOutlineUser />
      </StyledNavbarLink>
      <StyledNavbarLink
        aria-label="Go to Experience Section"
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        state={activeNav === "#experience" ? "active" : undefined}
      >
        <BiBook />
      </StyledNavbarLink>
      <StyledNavbarLink
        aria-label="Go to Portfolio Section"
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        state={activeNav === "#portfolio" ? "active" : undefined}
      >
        <RiServiceLine />
      </StyledNavbarLink>
      <StyledNavbarLink
        aria-label="Go to Contact Section"
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        state={activeNav === "#contact" ? "active" : undefined}
      >
        <BiMessageSquareDetail />
      </StyledNavbarLink>
    </StyledNavbar>
  );
};

export default Nav;
