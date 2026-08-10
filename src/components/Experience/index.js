import React from "react";
import { ExperienceContainer, ExperienceArea, ExperienceTitle, Timeline, Item, Dot, ItemHeader, Company, DateRange, experiences, Role, Description } from "./ExperienceElements";

const About = () => {
  return (
    <>
      <ExperienceContainer id="experience">
        <ExperienceArea>
          <ExperienceTitle>
            <h1>EXPERIENCE</h1>
          </ExperienceTitle>
          <Timeline>
            {experiences.map((exp) => (
              <Item key={exp.company}>
                <Dot $current={exp.current} />
                <ItemHeader>
                  <Company>{exp.company}</Company>
                  <DateRange>{exp.dates}</DateRange>
                </ItemHeader>
                <Role>{exp.role}</Role>
                <Description>{exp.description}</Description>
              </Item>
            ))}
           </Timeline>
        </ExperienceArea>
      </ExperienceContainer>
    </>
  );
};

export default About;
