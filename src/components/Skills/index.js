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
                  <SkillsBaseItem>CSS3 (SASS)</SkillsBaseItem>
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
                  <SkillsBaseItem>Bug Reporting & Validation</SkillsBaseItem>
                  <SkillsBaseItem>Playwright Automation</SkillsBaseItem>
                  <SkillsBaseItem>Git Version Control</SkillsBaseItem>
                  <SkillsBaseItem>Agile / Scrum</SkillsBaseItem>
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
                <SkillsBaseTitle>WORDPRESS ECOSYSTEM</SkillsBaseTitle>
                <SkillsBaseList>
                  <SkillsBaseItem>Elementor, ACF</SkillsBaseItem>
                  <SkillsBaseItem>WooCommerce</SkillsBaseItem>
                  <SkillsBaseItem>
                    Gravity Forms, WPForms, Contact Form 7
                  </SkillsBaseItem>
                  <SkillsBaseItem>Yoast SEO, Rank Math, AIOSEO</SkillsBaseItem>
                  <SkillsBaseItem>
                    W3 Total Cache, LiteSpeed Cache
                  </SkillsBaseItem>
                  <SkillsBaseItem>Wordfence, WP Mail SMTP</SkillsBaseItem>
                  <SkillsBaseItem>SearchWP, Google Site Kit</SkillsBaseItem>
                </SkillsBaseList>
              </SkillsBase>
              <SkillsBase>
                <SkillsBaseTitle>ADDITIONAL</SkillsBaseTitle>
                <SkillsBaseList>
                  <SkillsBaseItem>MySQL</SkillsBaseItem>
                  <SkillsBaseItem>Figma, Adobe XD</SkillsBaseItem>
                  <SkillsBaseItem>Chrome DevTools</SkillsBaseItem>
                  <SkillsBaseItem>
                    Google Tag Manager, Google Analytics
                  </SkillsBaseItem>
                  <SkillsBaseItem>
                    GoHighLevel (CRM & Marketing Automation)
                  </SkillsBaseItem>
                  <SkillsBaseItem>
                    SiteGround, Hostinger, Bluehost, GoDaddy, Namecheap,
                    Cloudflare
                  </SkillsBaseItem>
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
