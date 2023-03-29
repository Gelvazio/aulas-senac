import { styled } from "../../Global/stitches";

const Button = styled("button", {
  width: "max-content",
  display: "inline-block",
  color: "$primary",
  padding: "0.75rem 1.2rem",
  borderRadius: "0.4rem",
  cursor: "pointer",
  border: "1px solid $primary",
  transition: "$transition",
  "&:hover": {
    background: "$white",
    color: "$bg",
    borderColor: "transparent",
  },
  variants: {
    color: {
      primary: {
        background: "$primary",
        color: "$bg",
      },
    },
  },
});

const Link = styled("a", {
  color: "$primary",
  transition: "$transition",
  "&:hover": {
    color: "$white",
  },
  variants: {
    color: {
      primary: {
        background: "$primary",
        color: "$bg",
      },
      bg: {
        color: "$bg",
      },
      secondary: {
        background: "transparent",
        color: "$primary",
        "&:hover": {
          color: "$bg",
          background: "$white",
        },
      },
    },
    type: {
      button: {
        width: "max-content",
        display: "inline-block",
        color: "$bg",
        padding: "0.75rem 1.2rem",
        borderRadius: "0.4rem",
        cursor: "pointer",
        border: "1px solid $primary",
        transition: "$transition",
        "&:hover": {
          background: "$white",
          color: "$bg",
          borderColor: "transparent",
        },
      },
    },
  },
});

export { Button, Link };
