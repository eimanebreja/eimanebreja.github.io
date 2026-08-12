import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ContactArea = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;

  @media only screen and (max-width: 700px) {
    padding-top: 50px;
    padding-bottom: 80px;
    position: relative;
  }
`;
export const ContactTitle = styled.div`
  position: relative;
  h1 {
    letter-spacing: 4px;
    font-size: 80px;
    font-weight: 700;
    opacity: 0.3;
  }

  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 38px;
      line-height: 1.2;
    }
  }
`;

export const ContactIntro = styled.p`
  font-size: 18px;
  color: #a8a8a8;
  max-width: 420px;
  margin: 0 auto 36px;
  padding-top: 80px;
  text-align: center;

  @media only screen and (max-width: 700px) {
    font-size: 14px;
    max-width: 300px;
    margin: 0 auto 24px;
    padding-top: 30px;
  }
`;

export const ContactBody = styled.div`
  padding-top: 0;
  display: flex;
  flex-direction: column;
  alig-items: center;
`;

export const ContactEmail = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #161616;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  padding: 16px 32px;
  text-decoration: none;
  font-weight: 700;
  font-size: 28px;
  color: #f2f2f2;
  letter-spacing: 0.5px;
  transition: 0.3s ease;

  &:hover {
    border-color: #b31c34;
  }

  @media only screen and (max-width: 700px) {
    font-size: 16px;
    padding: 12px 20px;
    gap: 8px;
  }
`;

export const ContactEmailIcon = styled.span`
  color: #b31c34;
  font-size: 20px;

  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const ContactMenu = styled.div`
  padding-top: 36px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media only screen and (max-width: 700px) {
    padding-top: 24px;
    gap: 24px;
  }
`;

export const ContactList = styled.div``;

export const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #c94b4b;
  text-decoration: none;
  transition: 0.3s ease;
  position: relative;

  &::after {
    position: absolute;
    bottom: -4px;
    background: #b31c34;
    height: 2px;
    content: "";
    left: 0px;
    right: 0px;
    opacity: 0;
    transition: 0.3s ease;
  }

  &:hover {
    opacity: 0.8;
    transition: 0.3s ease;

    &::after {
      transition: 0.3s ease;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

export const ContactLinkIcon = styled.span`
  font-size: 14px;

  @media only screen and (max-width: 700px) {
    font-size: 12px;
  }
`;
