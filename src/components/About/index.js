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
              Hi, Im <span>Nimuel</span>, a <span>Web Developer</span>. I am a
              total of 3 years in <span>Wordpress Development </span>
              experience. I developed a responsive website from scratch. Im
              expert in Wordpress Development. I am working a several plugins
              like Woocommerce, Advanced Custom Fields, Contact form 7,
              Gutenberg-Blocks and technical SEO tools like YOAST SEO, SEOpress
              and All in One SEO. My main programing languages are Php, HTML,
              CSS, JAVASCRIPT and Jquery. And also, I have basic knowledge in
              API authentication in Laravel. I see myself growing by moving into
              more challenging roles, with greater responsibility perhaps in the
              services of the company. I am a self motivated person and I try to
              exceed my expectations with high-quality of work.
            </AboutBodyP>
          </AboutBody>
        </AboutArea>
      </AboutContainer>
    </>
  );
};

export default About;
