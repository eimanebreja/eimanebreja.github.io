import React from "react";
import {
  AboutContainer,
  AboutArea,
  AboutTitle,
  AboutBody,
  AboutTextCol,
  AboutBodyP,
  AboutStatsCol,
  AboutStatCard,
  AboutStatNumber,
  AboutStatLabel,
  AboutInfoText,
} from "./AboutElements";

const stats = [
  { number: "8+", label: "YEARS EXPERIENCE" },
  { number: "6+", label: "PROJECTS DELIVERED" },
  { number: "Intl.", label: "CLIENTS SERVED" },
];

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutArea>
          <AboutTitle>
            <h1>ABOUT ME</h1>
          </AboutTitle>
            <AboutBody>
              <AboutTextCol>
                <AboutBodyP>
                  <AboutInfoText>
                    Hi, I'm <span>Nimuel</span>, a <span>WordPress Developer</span>,{" "}
                    <span>QA Engineer</span>, and <span>Laravel Developer</span> with
                    over 8 years of experience building and testing web
                    applications.
                  </AboutInfoText>   
                </AboutBodyP>
                <AboutBodyP>
                  I specialize in custom WordPress theme and plugin development,
                  Laravel backend development, and REST API integration, paired
                  with manual testing, regression testing, and Playwright
                  automation. I've delivered WordPress projects for clients
                  across different markets, including several Japanese-market
                  businesses, ensuring system behavior consistently matches
                  business requirements. I'm a self-motivated person who enjoys
                  building scalable, user-friendly applications and delivering
                  reliable, high-quality work.
                </AboutBodyP>
              </AboutTextCol>
              <AboutStatsCol>
                {stats.map((stat) => (
                  <AboutStatCard key={stat.label}>
                    <AboutStatNumber>{stat.number}</AboutStatNumber>
                    <AboutStatLabel>{stat.label}</AboutStatLabel>
                  </AboutStatCard>
                ))}
              </AboutStatsCol>
            </AboutBody>
        </AboutArea>
      </AboutContainer>
    </>
  );
};

export default About;
