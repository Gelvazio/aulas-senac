import React, { useLayoutEffect, useState } from "react";
import { supabase } from "../../services/supabase-config";
import { Link } from "../styled/Button";
import {
  PortfolioContainer,
  PortfolioItem,
  PortfolioItemCTA,
  PortfolioItemImage,
  PortfolioItemTitle,
} from "./style";

type PortfolioData = {
  id: number;
  image: string;
  title: string;
  github: string;
  demo: string;
};

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData[] | null>(
    null
  );

  async function fetchPortfolioData() {
    const { data, error } = await supabase
      .from("Portfolio")
      .select("*")
      .order("id");
    if (error) console.log(error);
    setPortfolioData(data);
  }

  useLayoutEffect(() => {
    fetchPortfolioData();
  }, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <PortfolioContainer>
        {portfolioData?.map(({ id, image, title, github, demo }) => {
          return (
            <PortfolioItem key={id} className="portfolio__item">
              <PortfolioItemImage src={image} alt={title} />
              <PortfolioItemTitle>{title}</PortfolioItemTitle>
              <PortfolioItemCTA>
                <Link
                  aria-label="Open GitHub repository"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  type="button"
                  color="secondary"
                >
                  GitHub
                </Link>
                <Link
                  aria-label="Open live demo"
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  color="primary"
                  type="button"
                >
                  Live Demo
                </Link>
              </PortfolioItemCTA>
            </PortfolioItem>
          );
        })}
      </PortfolioContainer>
    </section>
  );
};

export default Portfolio;
