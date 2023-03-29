import { styled } from "../../Global/stitches";

const StyledNavbar = styled("nav", {
  display: "flex",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  width: "max-content",
  padding: "0.7rem 1.7rem",
  zIndex: "2",
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  bottom: "2rem",
  gap: "0.8rem",
  borderRadius: "3rem",
  backdropFilter: "blur(15px)",
});

const StyledNavbarLink = styled("a", {
  backgroundColor: "transparent",
  padding: "0.9rem",
  borderRadius: "50%",
  display: "flex",
  color: "$light",
  fontSize: "1.1rem",
  transition: "$transition",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "$white",
  },
  variants: {
    state: {
      active: {
        backgroundColor: "$primary",
        color: "$bg",
      },
    },
  },
});

export { StyledNavbar, StyledNavbarLink };
