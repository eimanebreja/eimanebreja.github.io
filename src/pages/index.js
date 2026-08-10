import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SocialIcon from "../components/SocialIcon";
import Homebanner from "../components/Homebanner";
import About from "../components/About";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Certification from "../components/Certification";
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
      <Experience />
      <Portfolio />
      <Skills />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
