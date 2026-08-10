import styled from "styled-components";

export const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;
export const PortfolioArea = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  @media only screen and (max-width: 700px) {
    padding-top: 30px;
    padding-bottom: 40px;
    position: relative;
  }
`;
export const PortfolioTitle = styled.div`
  position: relative;

  h1 {
    letter-spacing: 4px;
    font-size: 80px;
    font-weight: 700;
    opacity: 0.3;
  }
  @media only screen and (max-width: 700px) {
    h1 {
      letter-spacing: 2px;
      font-size: 38px;
      line-height: 1.2;
    }
  }
`;
export const PortfolioBody = styled.div`
  padding-top: 70px;
  z-index: 10;
  @media only screen and (max-width: 700px) {
    padding-top: 30px;
  }
`;
export const PortfolioRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 40px;
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;
export const PortfolioColumn = styled.div`
  position: relative;

  &:hover {
    &::after {
      transition: 0.3s;
      opacity: 0.4;
    }
  }

  &::after {
    transition: 0.3s;
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 5px;
    content: "";
    opacity: 0;
    background-color: #b31c34;
  }
`;
export const PortfolioColumnImg = styled.div`
  img {
    display: block;
    width: 100%;
    box-shadow: -9px 10px 0px 0px rgba(178, 28, 52, 0.49);
    -webkit-box-shadow: -9px 10px 0px 0px rgba(178, 28, 52, 0.49);
    -moz-box-shadow: -9px 10px 0px 0px rgba(178, 28, 52, 0.49);
  }
`;
export const PortfolioColumnLink = styled.a`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PortfolioColumnLinkIcon = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  cursor: pointer;
  img {
    width: 20px;
  }

  @media only screen and (max-width: 700px) {
    width: 30px;
    height: 30px;
    img {
      width: 10px;
    }
  }
`;

export const PortfolioItem = styled.div``;

export const PortfolioColumnCaption = styled.div`
  padding-top: 20px;
`;

export const PortfolioColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #f2f2f2;
  margin: 0 0 6px;
`;

export const PortfolioColumnDescription = styled.p`
  font-size: 14px;
  color: #a8a8a8;
  line-height: 1.5;
  margin: 0 0 10px;

  @media only screen and (max-width: 700px) {
    margin: 0 0 8px;
  }
`;

export const PortfolioTechStack = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

export const PortfolioTechPill = styled.span`
  font-size: 10px;
  color: #b31c34;
  border: 1px solid #b31c34;
  border-radius: 3px;
  padding: 2px 6px;
`;
