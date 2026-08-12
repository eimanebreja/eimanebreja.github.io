import styled from "styled-components";

export const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ExperienceArea = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
  @media only screen and (max-width: 700px) {
    padding-top: 30px;
    padding-bottom: 60px;
    position: relative;
  }
`;

export const ExperienceTitle = styled.div`
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

export const Timeline = styled.div`
  margin-top: 100px;
  position: relative;
  padding-left: 28px;
  border-left: 2px solid #2a2a2a;

  @media only screen and (max-width: 700px) {
    margin-top: 30px;
  }
`;

export const Item = styled.div`
  position: relative;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Dot = styled.div`
  position: absolute;
  left: -35px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => (props.$current ? "#b0223a" : "#5a5a5a")};
  box-shadow: ${(props) =>
    props.$current ? "0 0 0 4px rgba(176, 34, 58, 0.2)" : "none"};
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Company = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #f2f2f2;
  margin: 0;

  @media only screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

export const DateRange = styled.span`
  font-size: 14px;
  color: #8a8a8a;
  white-space: nowrap;
`;

export const Role = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #b0223a;
  margin: 4px 0 10px;

  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #a8a8a8;
  line-height: 1.6;
  margin: 0;
`;

// ---------------------------------------------------------------
// Data — edit this array to update your experience entries
// ---------------------------------------------------------------

export const experiences = [
  {
    company: "Spice Factory Philippines",
    role: "WordPress Developer | QA Engineer | Laravel Developer",
    dates: "Apr 2023 – Aug 2026",
    description:
      "Built and maintained custom WordPress and Laravel applications, ran manual and regression testing, and worked with Japanese project specifications for cross-functional teams.",
    current: true,
  },
  {
    company: "MyBusyBee, Inc.",
    role: "WordPress Developer",
    dates: "Dec 2022 – Mar 2023",
    description:
      "Developed custom WordPress websites using Advanced Custom Fields, with browser compatibility testing and client collaboration.",
    current: false,
  },
  {
    company: "FEEMO Global Solutions Philippines",
    role: "Team Lead | WordPress Developer",
    dates: "Aug 2018 – Sep 2022",
    description:
      "Led a development team delivering WordPress and e-commerce websites for international clients, mentoring junior developers through code review.",
    current: false,
  },
];
