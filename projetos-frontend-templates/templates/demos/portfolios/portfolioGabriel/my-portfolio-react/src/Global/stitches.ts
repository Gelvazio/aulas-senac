import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      bg: "#1f1f38",
      bgVariant: "#2c2c6c",
      primary: "#4db5ff",
      primaryVariant: "rgba(77, 181, 255, 0.4)",
      white: "#fff",
      light: "rgba(255, 255, 255, 0.6)",
    },
    transitions: {
      transition: "all 400ms ease",
    },
    sizes: {
      containerLg: "75%",
      containerMd: "86%",
      containerSm: "90%",
    },
  },
  media: {
    sm: "(max-width: 600px)",
    md: "(max-width: 1024px)",
  },
});
