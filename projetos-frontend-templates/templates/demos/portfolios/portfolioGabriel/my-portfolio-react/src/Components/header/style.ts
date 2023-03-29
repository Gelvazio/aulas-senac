import { styled } from "../../Global/stitches";

const StyledHeader = styled("header", {
  height: "100vh",
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
});

const StyledHeaderSocials = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.8rem",
  position: "absolute",
  left: "5rem",
  bottom: "3rem",
  "&::after": {
    content: "",
    width: "1px",
    height: "2rem",
    background: "$primary",
  },
  "@sm": {
    display: "none",
  },
});

const StyledCTA = styled("div", {
  marginTop: "2.5rem",
  display: "flex",
  gap: "1.2rem",
  justifyContent: "center",
});

const ScrollDownLink = styled("a", {
  color: "$primary",
  transition: "$transition",
  position: "absolute",
  right: "5rem",
  bottom: "5rem",
  transform: "rotate(90deg)",
  fontWeight: "300",
  fontSize: "0.9rem",
  "&:hover": {
    color: "$white",
  },
  "@sm": {
    display: "none",
  },
});

const StyledMeImg = styled("div", {
  background: "linear-gradient($primary, transparent)",
  width: "22rem",
  position: "absolute",
  left: "calc(50% - 11rem)",
  marginTop: "4rem",
  borderRadius: "12rem 12rem 0 0",
  overflow: "hidden",
  padding: "5rem 3rem 1.5rem 3rem",
});

export {
  StyledHeader,
  StyledHeaderSocials,
  StyledCTA,
  StyledMeImg,
  ScrollDownLink,
};
