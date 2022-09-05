import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SocialIcon from "../components/SocialIcon";
import Homebanner from "../components/Homebanner";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [isopen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isopen);
  };
  return (
    <>
      <Navbar isopen={isopen} toggle={toggle} />
      <SocialIcon />
      <Homebanner />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
