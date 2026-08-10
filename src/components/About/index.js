import React from "react";
import {
  AboutContainer,
  AboutArea,
  AboutTitle,
  AboutBody,
  AboutBodyP,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutArea>
          <AboutTitle>
            <h1>ABOUT ME</h1>
          </AboutTitle>
          <AboutBody>
            <AboutBodyP>
              Hi, I'm <span>Nimuel</span>, a <span>Wordpress Developer</span>, <span>QA Engineer</span>, and <span>Laravel Developer</span> with
              over 8 years of experience building and testing web applications. I specialize in custom Wordpress theme and plugin
              development, Laravel backend development, and REST API integration, paired with manual testing, regression testing, and Playwright
              automation. I've delivered several Wordpress projects for Japanese-market clients, ensuring system behavior consistently matches business
              requirements. I'm a self-motivated person who enjoys building scalable, user-friendly applications and delivering reliable, high-quality work.
            </AboutBodyP>
          </AboutBody>
        </AboutArea>
      </AboutContainer>
    </>
  );
};

export default About;
