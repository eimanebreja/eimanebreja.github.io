import React from "react";
import { FooterContainer, FooterArea } from "./FooterElements";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterArea>NIMUEL EIMAN NEBREJA &copy; {currentYear}</FooterArea>
      </FooterContainer>
    </>
  );
};

export default Footer;
