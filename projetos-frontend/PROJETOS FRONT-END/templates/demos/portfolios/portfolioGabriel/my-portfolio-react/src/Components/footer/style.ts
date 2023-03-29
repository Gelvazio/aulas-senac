import { styled } from "../../Global/stitches";

const StyledFooter = styled("footer", {
  background: "$primary",
  padding: "3rem 0",
  textAlign: "center",
  fontSize: "0.9rem",
  marginTop: "7rem",
});

const Permalinks = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "2rem",
  margin: "0 auto 3rem",
  "@sm": {
    flexDirection: "column",
    gap: "1.5rem",
  },
});

const FooterLogo = styled("a", {
  color: "$bg",
  transition: "$transition",
  fontSize: "2rem",
  fontWeight: "500",
  marginBottom: "2rem",
  display: "inline-block",
  "&:hover": {
    color: "$white",
  },
});

const FooterSocials = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  marginBottom: "4rem",
  "@sm": {
    marginBottom: "2.6rem",
  },
});

const FooterSocialsIcon = styled("a", {
  background: "$bg",
  color: "$white",
  padding: "0.8rem",
  borderRadius: "0.7rem",
  display: "flex",
  border: "1px solid transparent",
  transition: "$transition",
  "&:hover": {
    background: "transparent",
    color: "$bg",
    borderColor: "$bg",
  },
});

const FooterCopyright = styled("div", {
  marginBottom: "4rem",
  color: "$bg",
});

export {
  StyledFooter,
  Permalinks,
  FooterLogo,
  FooterSocials,
  FooterSocialsIcon,
  FooterCopyright,
};
