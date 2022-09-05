import styled from "styled-components";

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;
export const AboutArea = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
  @media only screen and (max-width: 700px) {
    padding-top: 30px;
    padding-bottom: 60px;
    position: relative;
  }
`;
export const AboutTitle = styled.div`
  h1 {
    letter-spacing: 4px;
    font-size: 80px;
    font-weight: 700;
    opacity: 0.3;
  }
  @media only screen and (max-width: 700px) {
    h1 {
      letter-spacing: 2px;
      font-size: 50px;
      opacity: 0.3;
      line-height: 1.2;
    }
  }
`;
export const AboutBody = styled.div`
  padding-top: 100px;
  max-width: 920px;
  margin: 0 auto;
  @media only screen and (max-width: 700px) {
    padding-top: 40px;
  }
`;
export const AboutBodyP = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 1px;
  span {
    color: #b31c34;
  }

  @media only screen and (max-width: 700px) {
    text-align: center;
    font-size: 16px;
  }
`;
