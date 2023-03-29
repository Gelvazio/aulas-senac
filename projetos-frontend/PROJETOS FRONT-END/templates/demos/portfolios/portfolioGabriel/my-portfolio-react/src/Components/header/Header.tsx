import React from "react";
import CTA from "./CTA";
import ME from "../../Assets/me.png";
import HeaderSocial from "./HeaderSocials";
import { ScrollDownLink, StyledHeader, StyledMeImg } from "./style";
import { SecondaryText } from "../styled/SecondaryText";

const Header = () => {
  return (
    <StyledHeader>
      <h5>Hello I&apos;m</h5>
      <h1>Gabriel Trzimajewski</h1>
      <SecondaryText>FrontEnd Developer</SecondaryText>
      <CTA />
      <HeaderSocial />

      <StyledMeImg>
        <img src={ME} alt="Gabriel Trzimajewski Photo" />
      </StyledMeImg>

      <ScrollDownLink href="#contact">Scroll Down</ScrollDownLink>
    </StyledHeader>
  );
};

export default Header;
