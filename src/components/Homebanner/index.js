import React from "react";
import {
  Banner,
  BannerContainer,
  BannerImg,
  BannerTitle,
  Resume,
  ResumeLinks,
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
          <h1>WEB</h1>
          <h1>
            <span>DEVELOPER</span>
          </h1>
          <p>NIMUEL EIMAN NEBREJA</p>
        </BannerTitle>
      </BannerContainer>
      <Resume>
        <ResumeLinks href={myResume} download>
          MY RESUME
        </ResumeLinks>
      </Resume>
    </Banner>
  );
};

export default Homebanner;
