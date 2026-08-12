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
    margin: 0 0 6px;
  }

  @media only screen and (max-width: 700px) {
    h1 {
      letter-spacing: 2px;
      font-size: 38px;
      opacity: 0.3;
      line-height: 1.2;
    }
  }
`;

export const AboutBody = styled.div`
  display: flex;
  gap: 48px;
  padding-top: 70px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    gap: 24px;
    padding-top: 30px;
  }
`;

export const AboutTextCol = styled.div`
  flex: 2;
`;

export const AboutBodyP = styled.p`
  text-align: left;
  font-size: 17px;
  line-height: 1.8;
  letter-spacing: 0.5px;
  color: #a8a8a8;
  margin: 0 0 18px;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    color: #c94b4b;
  }

  @media only screen and (max-width: 700px) {
    text-align: left;
    font-size: 15px;
    line-height: 1.7;
  }
`;

export const AboutStatsCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 180px;

  @media only screen and (max-width: 700px) {
    flex-direction: row;
    min-width: 0;
    gap: 10px;
  }
`;

export const AboutStatCard = styled.div`
  background: #161616;
  border: 1px solid #2a2a2a;
  border-left: 3px solid #b31c34;
  border-radius: 0 4px 4px 0;
  padding: 14px 18px;

  @media only screen and (max-width: 700px) {
    flex: 1;
    padding: 10px 10px;
    text-align: center;
    border-left: 1px solid #2a2a2a;
    border-top: 3px solid #b31c34;
    border-radius: 0 0 4px 4px;
  }
`;

export const AboutStatNumber = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #f2f2f2;
  margin: 0;

  @media only screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

export const AboutStatLabel = styled.p`
  font-size: 11px;
  color: #8a8a8a;
  letter-spacing: 1px;
  margin: 2px 0 0;

  @media only screen and (max-width: 700px) {
    font-size: 9px;
    line-height: 2;
  }
`;
