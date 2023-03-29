import React from "react";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About";
import { Experience } from "./Components/Experience";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Reviews from "./Components/reviews/Reviews";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import "./Global/index.scss";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
