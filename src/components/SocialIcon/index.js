import React from "react";
import {
  SidebarIcon,
  SidebarIconList,
  SidebarIconItem,
  SidebarIconLink,
} from "./SocialIconElements";
import FbIcon from "../../images/ic_fb.svg";
import LinkedInIcon from "../../images/ic_linkedin.svg";
import GithubIcon from "../../images/ic_github.svg";

const SocialIcon = () => {
  return (
    <SidebarIcon>
      <SidebarIconList>
        <SidebarIconItem>
          <SidebarIconLink href="/" target="_blank" rel="noreferrer">
            <img src={FbIcon} alt="Facebook" />
          </SidebarIconLink>
        </SidebarIconItem>
        <SidebarIconItem>
          <SidebarIconLink
            href="https://www.linkedin.com/in/nimuel-eiman/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInIcon} alt="Linked" />
          </SidebarIconLink>
        </SidebarIconItem>
        <SidebarIconItem>
          <SidebarIconLink
            href="https://github.com/eimanebreja"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubIcon} alt="Github" />
          </SidebarIconLink>
        </SidebarIconItem>
      </SidebarIconList>
    </SidebarIcon>
  );
};

export default SocialIcon;
