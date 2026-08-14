import React from "react";
import {
  Banner,
  BannerContainer,
  BannerImg,
  BannerTitle,
  BannerEyebrow,
  BannerRole,
  BannerTagline,
  CtaRow,
  ResumeLinks,
  TalkLink,
} from "./HomebannerElements";
import myProfile from "../../images/profile.JPEG";
import myResume from "../../resume/NEBREJA_NIMUEL_EIMAN.pdf";

const Homebanner = () => {
  return (
    <Banner>
      <BannerContainer>
        <BannerImg>
          <img src={myProfile} alt="Profile Pic" />
        </BannerImg>
        <BannerTitle>
          <BannerEyebrow>Hi, I'm Nimuel Eiman Nebreja</BannerEyebrow>
          <h1>WEB</h1>
          <h1>
            <span>DEVELOPER</span>
          </h1>
          <BannerRole>WORDPRESS | LARAVEL | QA ENGINEER</BannerRole>
          <BannerTagline>
            Building and testing reliable web applications for 8+ years.
          </BannerTagline>
          <CtaRow>
            <ResumeLinks href={myResume} download>
              My Resume
            </ResumeLinks>
            <TalkLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Let's Talk
            </TalkLink>
          </CtaRow>
        </BannerTitle>
      </BannerContainer>
    </Banner>
  );
};

export default Homebanner;
