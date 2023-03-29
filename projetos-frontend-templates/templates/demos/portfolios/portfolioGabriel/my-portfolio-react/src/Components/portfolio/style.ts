import { styled } from "../../Global/stitches";

const PortfolioContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "2.5rem",
  width: "$containerLg",
  margin: "0 auto",
  "@md": {
    gridTemplateColumns: "1fr 1fr",
    gap: "1.2rem",
  },
  "@sm": {
    gridTemplateColumns: "1fr",
    gap: "1rem",
  },
});

const PortfolioItem = styled("article", {
  backgroundColor: "$bgVariant",
  padding: "1.2rem",
  borderRadius: "2rem",
  border: "1px solid transparent",
  transition: "$transition",
  "&:hover": {
    borderColor: "$primaryVariant",
    backgroundColor: "transparent",
  },
});

const PortfolioItemTitle = styled("h3", {
  margin: "1.2rem 0 2rem",
});

const PortfolioItemImage = styled("img", {
  borderRadius: " 1.5rem",
  overflow: "hidden",
});

const PortfolioItemCTA = styled("div", {
  display: "flex",
  gap: "1rem",
  marginBottom: "1rem",
});

export {
  PortfolioContainer,
  PortfolioItem,
  PortfolioItemTitle,
  PortfolioItemImage,
  PortfolioItemCTA,
};
