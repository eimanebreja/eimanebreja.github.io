import styled from "styled-components";

export const CertificationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;
export const CertificationArea = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
  @media only screen and (max-width: 700px) {
    padding-top: 30px;
    padding-bottom: 60px;
    position: relative;
  }
`;
export const CertificationTitle = styled.div`
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
      opacity: 0.3;
      line-height: 1.2;
    }
  }
`;

export const CertificationBody = styled.div`
  padding-top: 70px;
  z-index: 10;

  @media only screen and (max-width: 700px) {
    padding-top: 24px;
  }
`;

export const CertificationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const CertificationBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: #161616;
  border: 1px solid #2a2a2a;
  border-left: 3px solid #b31c34;
  border-radius: 4px;
  padding: 16px 20px;
  max-width: 480px;

  @media only screen and (max-width: 700px) {
    max-width: 100%;
  }
`;

export const CertificationIconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #1f1f1f;
  border: 1px solid #b31c34;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 22px;
    height: 22px;
    stroke: #b31c34;
  }
`;

export const CertificationInfo = styled.div``;

export const CertificationName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #f2f2f2;
  margin: 0 0 2px;
`;

export const CertificationIssuer = styled.p`
  font-size: 12px;
  color: #a8a8a8;
  margin: 0 0 2px;
`;

export const CertificationId = styled.p`
  font-size: 11px;
  color: #6a6a6a;
  margin: 0;
`;

