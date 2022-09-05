import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ContactArea = styled.div`
  padding-top: 100px;
  padding-bottom: 200px;
  position: relative;

  @media only screen and (max-width: 700px) {
    padding-top: 50px;
    padding-bottom: 100px;
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
      font-size: 50px;
      line-height: 1.2;
    }
  }
`;
export const ContactBody = styled.div`
  padding-top: 100px;

  @media only screen and (max-width: 700px) {
    padding-top: 30px;
  }
`;
export const ContactEmail = styled.div`
  font-weight: 700;
  font-size: 60px;
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.6;
  @media only screen and (max-width: 700px) {
    font-size: 20px;
    text-align: center;
  }
`;
export const ContactMenu = styled.div`
  padding-top: 100px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    padding-top: 30px;
    flex-direction: column;
  }
`;
export const ContactList = styled.div`
  @media only screen and (max-width: 700px) {
    padding-top: 10px;
    flex-basis: 100%;
  }
`;
export const ContactLink = styled.a`
  font-size: 40px;
  color: #b31c34;
  text-decoration: none;
  transition: 0.3s ease;
  position: relative;

  &::after {
    position: absolute;
    bottom: -2px;
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
    display: flex;
    text-align: center;
    font-size: 20px;
  }
`;
