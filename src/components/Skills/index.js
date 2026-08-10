import React from "react";
import {
  SkillsContainer,
  SkillsArea,
  SkillsTitle,
  SkillsBody,
  SkillsDesc,
  SkillsContent,
  SkillsBase,
  SkillsBaseTitle,
  SkillsBaseList,
  SkillsBaseItem,
} from "./SkillsElements";

const Skills = () => {
  return (
    <>
      <SkillsContainer id="skills">
        <SkillsArea>
          <SkillsTitle>
            <h1>SKILLS</h1>
          </SkillsTitle>
          <SkillsBody>
            <SkillsDesc>
              <p>
                I estimate for, architect, build, optimise and launch
                client-side solutions that users love.
              </p>
              <p>
                Here is a selection of relevant technologies that I enjoy
                working with with:
              </p>
            </SkillsDesc>
            <SkillsContent>
              <SkillsBase>
                <SkillsBaseTitle>LANGUAGES</SkillsBaseTitle>
                <SkillsBaseList>
                  <SkillsBaseItem>HTML5</SkillsBaseItem>
                  <SkillsBaseItem>CSS3 (SCSS)</SkillsBaseItem>
                  <SkillsBaseItem>Javascript</SkillsBaseItem>
                  <SkillsBaseItem>Php</SkillsBaseItem>
                  <SkillsBaseItem>SQL</SkillsBaseItem>
                </SkillsBaseList>
              </SkillsBase>
              <SkillsBase>
                <SkillsBaseTitle>METHODS & TOOLS</SkillsBaseTitle>
                <SkillsBaseList>
                  <SkillsBaseItem>Manual & Regression Testing</SkillsBaseItem>
                  <SkillsBaseItem>Test Case Design</SkillsBaseItem>
                  <SkillsBaseItem>Playwright Automation</SkillsBaseItem>
                  <SkillsBaseItem>Git Version Control</SkillsBaseItem>
                  <SkillsBaseItem>Agile / Scrum</SkillsBaseItem>
                  <SkillsBaseItem>Accessibility Testing</SkillsBaseItem>
                </SkillsBaseList>
              </SkillsBase>
              <SkillsBase>
                <SkillsBaseTitle>FRAMEWORKS & LIBRARIES</SkillsBaseTitle>
                <SkillsBaseList>
                  <SkillsBaseItem>Wordpress</SkillsBaseItem>
                  <SkillsBaseItem>Laravel</SkillsBaseItem>
                  <SkillsBaseItem>Jquery, Vanilla</SkillsBaseItem>
                  <SkillsBaseItem>React.JS</SkillsBaseItem>
                  <SkillsBaseItem>REST APIs</SkillsBaseItem>
                </SkillsBaseList>
              </SkillsBase>
              <SkillsBase>
                <SkillsBaseTitle>ADDITIONAL</SkillsBaseTitle>
                <SkillsBaseList>
                  <SkillsBaseItem>MySQL</SkillsBaseItem>
                  <SkillsBaseItem>Photoshop, Adobe XD</SkillsBaseItem>
                  <SkillsBaseItem>Git</SkillsBaseItem>
                  <SkillsBaseItem>Google Tag Manager</SkillsBaseItem>
                  <SkillsBaseItem>Google Analytics</SkillsBaseItem>
                  <SkillsBaseItem>Performance Optimisation</SkillsBaseItem>
                </SkillsBaseList>
              </SkillsBase>
            </SkillsContent>
          </SkillsBody>
        </SkillsArea>
      </SkillsContainer>
    </>
  );
};

export default Skills;
