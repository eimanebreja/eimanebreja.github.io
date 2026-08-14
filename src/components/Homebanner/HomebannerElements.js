import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Banner = styled.div`
  padding-top: 100px;
  min-height: 800px;
  position: relative;
  background-color: #000;

  @media only screen and (max-width: 700px) {
    padding-top: 100px;
    padding-bottom: 50px;
    min-height: auto;
  }
`;

export const BannerContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const BannerImg = styled.div`
  flex-basis: 50%;

  img {
    display: block;
    width: 600px;
  }

  @media only screen and (max-width: 700px) {
    flex-basis: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-width: 260px;
    }
  }
`;

export const BannerTitle = styled.div`
  margin-left: -30px;
  flex-basis: 50%;

  h1 {
    font-size: 70px;
    line-height: 1.2;
    letter-spacing: 4px;
    font-weight: 700;
    transition: 0.5s linear;
    display: inline-block;
    margin: 0;

    span {
      font-size: 60px;
      display: block;
      letter-spacing: 7px;
    }
  }

  @media only screen and (max-width: 700px) {
    padding-top: 24px;
    margin-left: 0px;
    flex-basis: 100%;
    text-align: center;

    h1 {
      text-align: center;
      font-size: 40px;

      span {
        font-size: 40px;
      }
    }
  }
`;

export const BannerEyebrow = styled.p`
  color: #c94b4b;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 8px;

  @media only screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

export const BannerRole = styled.p`
  padding-top: 20px;
  line-height: 1.2;
  font-size: 18px;
  font-weight: 700;
  color: #b31c34;
  margin: 20px 0 0;

  @media only screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

export const BannerTagline = styled.p`
  font-size: 15px;
  color: #a8a8a8;
  line-height: 1.6;
  max-width: 380px;
  margin: 12px 0 0;

  @media only screen and (max-width: 700px) {
    font-size: 13px;
    max-width: 300px;
    margin: 10px auto 0;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 32px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    gap: 12px;
    padding-top: 24px;
  }
`;

export const ResumeLinks = styled.a`
  text-decoration: none;
  background-color: transparent;
  color: #e6e4ec;
  overflow: visible;
  border: 1px solid rgba(238, 232, 255, 0.57);
  transition: background-color 0.3s ease, color 0.3s ease;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 0.68182rem;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0.85em 2em 0.83em;
  cursor: pointer;
  position: relative;
  text-align: center;

  &:hover {
    background-color: #e6e0f8;
    color: #000;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 0.9em 1em;
  }
`;

export const TalkLink = styled(LinkS)`
  text-decoration: none;
  background-color: #b31c34;
  color: #fff;
  border: 1px solid #b31c34;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 0.68182rem;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0.85em 2em 0.83em;
  cursor: pointer;
  text-align: center;

  &:hover {
    opacity: 0.85;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 0.9em 1em;
  }
`;
