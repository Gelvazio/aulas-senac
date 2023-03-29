import React from "react";
import { Link } from "../styled/Button";
import { StyledCTA } from "./style";

const CTA = () => {
  return (
    <StyledCTA>
      <Link
        type="button"
        color="primary"
        href="#contact"
        aria-label="Contact me"
      >
        Contact
      </Link>
    </StyledCTA>
  );
};

export default CTA;
