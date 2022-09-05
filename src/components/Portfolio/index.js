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
} from "./PortfolioElements";

import IconLink from "../../images/ic_link.png";
import PortImgOne from "../../images/portfolio_16.png";
import PortImgTwo from "../../images/portfolio_17.png";
import PortImgKanpai from "../../images/kanpai.png";
import PortImgShrine from "../../images/shrine.png";
import PortImgLetscan from "../../images/letscan.png";
import PortImgMytown from "../../images/mytown.png";
import PortImgMystay from "../../images/mystay.png";
import PortImgPasito from "../../images/pasito.png";
import PortImgCarhome from "../../images/carhome.png";
import PortImgRaising from "../../images/rasisingfunds.png";
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
              <PortfolioColumn>
                <PortfolioColumnImg>
                  <img src={PortImgMystay} alt="MyStay" />
                </PortfolioColumnImg>
                <PortfolioColumnLink
                  href="http://mystay.ph/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PortfolioColumnLinkIcon>
                    <img src={IconLink} alt="" />
                  </PortfolioColumnLinkIcon>
                </PortfolioColumnLink>
              </PortfolioColumn>
              <PortfolioColumn>
                <PortfolioColumnImg>
                  <img src={PortImgKanpai} alt="Logo" />
                </PortfolioColumnImg>
                <PortfolioColumnLink
                  href="https://www.kanpai-reuse.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PortfolioColumnLinkIcon>
                    <img src={IconLink} alt="" />
                  </PortfolioColumnLinkIcon>
                </PortfolioColumnLink>
              </PortfolioColumn>
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
              <PortfolioColumn>
                <PortfolioColumnImg>
                  <img src={PortImgCarhome} alt="Car Home" />
                </PortfolioColumnImg>
                <PortfolioColumnLink
                  href="https://carhome.jp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PortfolioColumnLinkIcon>
                    <img src={IconLink} alt="" />
                  </PortfolioColumnLinkIcon>
                </PortfolioColumnLink>
              </PortfolioColumn>
              <PortfolioColumn>
                <PortfolioColumnImg>
                  <img src={PortImgRaising} alt="Raising Funds" />
                </PortfolioColumnImg>
                <PortfolioColumnLink
                  href="https://www.raisingfunds.biz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PortfolioColumnLinkIcon>
                    <img src={IconLink} alt="" />
                  </PortfolioColumnLinkIcon>
                </PortfolioColumnLink>
              </PortfolioColumn>
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
              <PortfolioColumn>
                <PortfolioColumnImg>
                  <img src={PortImgOne} alt="Logo" />
                </PortfolioColumnImg>
                <PortfolioColumnLink
                  href="http://feemo.xsrv.jp/apparel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PortfolioColumnLinkIcon>
                    <img src={IconLink} alt="" />
                  </PortfolioColumnLinkIcon>
                </PortfolioColumnLink>
              </PortfolioColumn>
              <PortfolioColumn>
                <PortfolioColumnImg>
                  <img src={PortImgTwo} alt="Logo" />
                </PortfolioColumnImg>
                <PortfolioColumnLink
                  href="http://feemo.xsrv.jp/real-estate/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PortfolioColumnLinkIcon>
                    <img src={IconLink} alt="" />
                  </PortfolioColumnLinkIcon>
                </PortfolioColumnLink>
              </PortfolioColumn>
            </PortfolioRow>
          </PortfolioBody>
        </PortfolioArea>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
