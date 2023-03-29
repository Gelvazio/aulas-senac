import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "../styled/Button";
import { StyledHeaderSocials } from "./style";

const HeaderSocials = () => {
  return (
    <StyledHeaderSocials>
      <Link
        href="https://www.linkedin.com/in/gabriel-trzimajewski/"
        target="_blank"
        rel="noreferrer"
        aria-label="Linkedin Profile"
      >
        <BsLinkedin />
      </Link>
      <Link
        href="https://github.com/sn0wye"
        target="_blank"
        rel="noreferrer"
        aria-label="Github Profile"
      >
        <FaGithub />
      </Link>
    </StyledHeaderSocials>
  );
};

export default HeaderSocials;
