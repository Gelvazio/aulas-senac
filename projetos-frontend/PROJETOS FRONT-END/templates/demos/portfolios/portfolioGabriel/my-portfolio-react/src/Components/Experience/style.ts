import { styled } from "../../Global/stitches";

export const Container = styled("div", {
  width: "$containerLg",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2rem",
  "@md": {
    gridTemplateColumns: "1fr",
  },
  "@sm": {
    gap: "1rem",
  },
});

export const Card = styled("div", {
  background: "$bgVariant",
  padding: "2.4rem 5rem",
  borderRadius: "2rem",
  border: "1px solid transparent",
  transition: "$transition",
  "&:hover": {
    background: "transparent",
    borderColor: "$primaryVariant",
  },
  "@md": {
    width: "80%",
    padding: "2rem",
    margin: "0 auto",
  },
  "@sm": {
    width: "100%",
    padding: "2rem 1rem",
  },
});

export const CardTitle = styled("h3", {
  textAlign: "center",
  marginBottom: "2rem",
  color: "$primary",
});

export const CardContent = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: "2rem",
  "@sm": {
    padding: "1rem",
  },
});

export const CardDetails = styled("article", {
  display: "block",
  maxWidth: "80%",
  alignItems: "center",
  justifyContent: "center",
  color: "$light",
});

export const CardDetailsTitle = styled("h3", {
  textAlign: "left",
  fontSize: "1.2rem",
  lineHeight: "1.3rem",
  color: "$white",
});
