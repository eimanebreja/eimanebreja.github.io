import styled from "styled-components";

export const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SkillsArea = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  @media only screen and (max-width: 700px) {
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
  }
`;
export const SkillsTitle = styled.div`
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
      font-size: 50px;
      line-height: 1.2;
    }
  }
`;
export const SkillsBody = styled.div`
  padding-top: 50px;
  @media only screen and (max-width: 700px) {
    padding-top: 30px;
  }
`;
export const SkillsDesc = styled.div`
  p {
    padding-top: 10px;
    font-size: 20px;
    line-height: 1.4;
  }
`;
export const SkillsContent = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #323232;
  padding: 30px 20px;

  @media only screen and (max-width: 700px) {
    padding: 0px 20px 30px;
    flex-wrap: wrap;
  }
`;
export const SkillsBase = styled.div`
  @media only screen and (max-width: 700px) {
    padding-top: 30px;
  }
`;
export const SkillsBaseTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
export const SkillsBaseList = styled.ul`
  padding-top: 5px;
  list-style: none;
  font-weight: 300;
  font-size: 16px;
`;
export const SkillsBaseItem = styled.li`
  position: relative;
  padding-left: 25px;
  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 13px;
    bottom: 0;
    width: 18px;
    height: 1px;
    background-color: rgba(238, 232, 255, 0.57);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
`;
