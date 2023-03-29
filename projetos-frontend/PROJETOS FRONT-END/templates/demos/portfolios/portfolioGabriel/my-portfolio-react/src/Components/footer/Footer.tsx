import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "../styled/Button";
import {
  FooterCopyright,
  FooterLogo,
  FooterSocials,
  FooterSocialsIcon,
  Permalinks,
  StyledFooter,
} from "./style";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogo
        color="bg"
        aria-label="Go back to the top"
        href="#"
        className="footer__logo"
      >
        Gabriel Trzimajewski
      </FooterLogo>

      <Permalinks>
        <li>
          <Link color="bg" href="#">
            Home
          </Link>
        </li>
        <li>
          <Link color="bg" href="#about">
            About
          </Link>
        </li>
        <li>
          <Link color="bg" href="#experience">
            Experience
          </Link>
        </li>
        {/* <Link href="#services">Services</Link> */}
        <li>
          <Link color="bg" href="#portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link color="bg" href="#reviews">
            Reviews
          </Link>
        </li>
        <li>
          <Link color="bg" href="#contact">
            Contact
          </Link>
        </li>
      </Permalinks>

      <FooterSocials>
        <FooterSocialsIcon
          aria-label="Send me an email"
          href="mailto:gabrielsnowye@gmail.com"
        >
          <MdOutlineEmail />
        </FooterSocialsIcon>
        <FooterSocialsIcon
          aria-label="LinkedIn Profile"
          href="https://www.linkedin.com/in/gabriel-trzimajewski/"
        >
          <BsLinkedin />
        </FooterSocialsIcon>
      </FooterSocials>

      <FooterCopyright>
        <small>&copy; Sn0wye/Gabriel Trzimajewski. All rights reserved.</small>
      </FooterCopyright>
    </StyledFooter>
  );
};

export default Footer;
