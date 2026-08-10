import React from "react";
import {
  PortfolioContainer,
  PortfolioArea,
  PortfolioTitle,
  PortfolioBody,
  PortfolioRow,
  PortfolioColumn,
  PortfolioColumnImg,
  PortfolioColumnLink,
  PortfolioColumnLinkIcon,
  PortfolioItem,
  PortfolioColumnCaption,
  PortfolioColumnTitle,
  PortfolioColumnDescription,
  PortfolioTechStack,
  PortfolioTechPill,
} from "./PortfolioElements";

import IconLink from "../../images/ic_link.png";
import PortImgShrine from "../../images/shrine.png";
import PortImgLetscan from "../../images/letscan.png";
import PortImgMytown from "../../images/mytown.png";
import PortImgPasito from "../../images/pasito.png";
import PortImgKeskin from "../../images/keskin.png";
import PortImgOkugawa from "../../images/okugawa.png";

const Portfolio = () => {
  return (
    <>
      <PortfolioContainer id="portfolio">
        <PortfolioArea>
          <PortfolioTitle>
            <h1>PORTFOLIO</h1>
          </PortfolioTitle>
          <PortfolioBody>
            <PortfolioRow>
              <PortfolioItem>
                <PortfolioColumn>
                  <PortfolioColumnImg>
                    <img src={PortImgMytown} alt="Logo" />
                  </PortfolioColumnImg>
                  <PortfolioColumnLink
                    href="https://mytown.ph/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PortfolioColumnLinkIcon>
                      <img src={IconLink} alt="" />
                    </PortfolioColumnLinkIcon>
                  </PortfolioColumnLink>
                </PortfolioColumn>
                <PortfolioColumnCaption>
                  <PortfolioColumnTitle>MyTown PH</PortfolioColumnTitle>
                  <PortfolioColumnDescription>
                    Custom WordPress site for the Philippine hotel market,
                    with Multisite and HubSpot integration.
                  </PortfolioColumnDescription>
                  <PortfolioTechStack>
                    <PortfolioTechPill>WordPress</PortfolioTechPill>
                    <PortfolioTechPill>ACF</PortfolioTechPill>
                    <PortfolioTechPill>HubSpot</PortfolioTechPill>
                    <PortfolioTechPill>Multisite</PortfolioTechPill>
                  </PortfolioTechStack>
                </PortfolioColumnCaption>
              </PortfolioItem>
              <PortfolioItem>
                <PortfolioColumn>
                  <PortfolioColumnImg>
                    <img src={PortImgShrine} alt="Logo" />
                  </PortfolioColumnImg>
                  <PortfolioColumnLink
                    href="https://sriracha.jp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PortfolioColumnLinkIcon>
                      <img src={IconLink} alt="" />
                    </PortfolioColumnLinkIcon>
                  </PortfolioColumnLink>
                </PortfolioColumn>
                <PortfolioColumnCaption>
                  <PortfolioColumnTitle>Sriracha.jp</PortfolioColumnTitle>
                  <PortfolioColumnDescription>
                    Custom WordPress site for a Japanese-market client,
                    built as a single-page application.
                  </PortfolioColumnDescription>
                  <PortfolioTechStack>
                    <PortfolioTechPill>WordPress</PortfolioTechPill>
                    <PortfolioTechPill>Contact Form 7</PortfolioTechPill>
                    <PortfolioTechPill>Multisite</PortfolioTechPill>
                  </PortfolioTechStack>
                </PortfolioColumnCaption>
              </PortfolioItem>
              <PortfolioItem>
                <PortfolioColumn>
                  <PortfolioColumnImg>
                    <img src={PortImgOkugawa} alt="Okugawa" />
                  </PortfolioColumnImg>
                  <PortfolioColumnLink
                    href="https://okugawaseitai.com/sisei-taikan-lp2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PortfolioColumnLinkIcon>
                      <img src={IconLink} alt="" />
                    </PortfolioColumnLinkIcon>
                  </PortfolioColumnLink>
                </PortfolioColumn>
                <PortfolioColumnCaption>
                  <PortfolioColumnTitle>Okugawaseitai</PortfolioColumnTitle>
                  <PortfolioColumnDescription>
                    Custom WordPress site for a Japanese-market client,
                    built as a single-page application.
                  </PortfolioColumnDescription>
                  <PortfolioTechStack>
                    <PortfolioTechPill>WordPress</PortfolioTechPill>
                    <PortfolioTechPill>SPA</PortfolioTechPill>
                  </PortfolioTechStack>
                </PortfolioColumnCaption>
              </PortfolioItem>
              <PortfolioItem>
                <PortfolioColumn>
                  <PortfolioColumnImg>
                    <img src={PortImgPasito} alt="Pasito" />
                  </PortfolioColumnImg>
                  <PortfolioColumnLink
                    href="https://pasito.jp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PortfolioColumnLinkIcon>
                      <img src={IconLink} alt="" />
                    </PortfolioColumnLinkIcon>
                  </PortfolioColumnLink>
                </PortfolioColumn>
                <PortfolioColumnCaption>
                  <PortfolioColumnTitle>Pasito.jp</PortfolioColumnTitle>
                  <PortfolioColumnDescription>
                    Custom WordPress site for a Japanese-market client,
                    built as a single-page application with Contact Form 7.
                  </PortfolioColumnDescription>
                  <PortfolioTechStack>
                    <PortfolioTechPill>WordPress</PortfolioTechPill>
                    <PortfolioTechPill>Contact Form 7</PortfolioTechPill>
                    <PortfolioTechPill>SPA</PortfolioTechPill>
                  </PortfolioTechStack>
                </PortfolioColumnCaption>
              </PortfolioItem>
              <PortfolioItem>
                <PortfolioColumn>
                  <PortfolioColumnImg>
                    <img src={PortImgKeskin} alt="Kes Kin" />
                  </PortfolioColumnImg>
                  <PortfolioColumnLink
                    href="https://kes-kin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PortfolioColumnLinkIcon>
                      <img src={IconLink} alt="" />
                    </PortfolioColumnLinkIcon>
                  </PortfolioColumnLink>
                </PortfolioColumn>
                <PortfolioColumnCaption>
                  <PortfolioColumnTitle>KES-KIN</PortfolioColumnTitle>
                  <PortfolioColumnDescription>
                    Custom WordPress site with WooCommerce integration,
                    built for a single-product e-commerce experience.
                  </PortfolioColumnDescription>
                  <PortfolioTechStack>
                    <PortfolioTechPill>WordPress</PortfolioTechPill>
                    <PortfolioTechPill>WooCommerce</PortfolioTechPill>
                  </PortfolioTechStack>
                </PortfolioColumnCaption>
              </PortfolioItem>
              <PortfolioItem>
                <PortfolioColumn>
                  <PortfolioColumnImg>
                    <img src={PortImgLetscan} alt="Logo" />
                  </PortfolioColumnImg>
                  <PortfolioColumnLink
                    href="https://letscan.jp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PortfolioColumnLinkIcon>
                      <img src={IconLink} alt="" />
                    </PortfolioColumnLinkIcon>
                  </PortfolioColumnLink>
                </PortfolioColumn>
                <PortfolioColumnCaption>
                  <PortfolioColumnTitle>LetScan</PortfolioColumnTitle>
                  <PortfolioColumnDescription>
                    Custom WordPress site for a Japanese-market client,
                    built as a single-page application with Contact Form 7.
                  </PortfolioColumnDescription>
                  <PortfolioTechStack>
                    <PortfolioTechPill>WordPress</PortfolioTechPill>
                    <PortfolioTechPill>Contact Form 7</PortfolioTechPill>
                    <PortfolioTechPill>SPA</PortfolioTechPill>
                  </PortfolioTechStack>
                </PortfolioColumnCaption>
              </PortfolioItem>
            </PortfolioRow>
          </PortfolioBody>
        </PortfolioArea>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
