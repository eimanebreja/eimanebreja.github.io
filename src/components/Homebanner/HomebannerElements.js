import styled from "styled-components";

export const Banner = styled.div`
  padding-top: 100px;
  height: 800px;
  position: relative;
  background-color: #000;

  @media only screen and (max-width: 700px) {
    padding-top: 100px;
    padding-bottom: 50px;
    height: auto;
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
    img {
      width: 100%;
    }
  }
`;

export const BannerTitle = styled.div`
  margin-left: -100px;
  flex-basis: 50%;
  h1 {
    font-size: 70px;
    line-height: 1.2;
    letter-spacing: 4px;
    font-weight: 700;
    transition: 0.5s linear;
    display: inline-block;
    span {
      font-size: 60px;
      display: block;
      letter-spacing: 7px;
    }
  }
  p {
    padding-top: 20px;
    line-height: 1.2;
    font-size: 18px;
    font-weight: 700;
    color: #b31c34;
  }
  @media only screen and (max-width: 700px) {
    padding-top: 30px;
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
export const Resume = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;

  @media only screen and (max-width: 700px) {
    padding-top: 40px;
    position: static;
    bottom: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
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

  &::after {
    content: "";
    position: absolute;
    left: -15px;
    top: 21px;
    bottom: 0;
    width: 30px;
    height: 1px;
    background-color: rgba(238, 232, 255, 0.57);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &:hover {
    background-color: #e6e0f8;
    color: #000;
    &::after {
      transform: translate3d(20px, 0, 0);
      opacity: 0;
    }
  }
  @media only screen and (max-width: 700px) {
    padding: 0.85em 4em 0.83em;
  }
`;
