import React from "react";
import {
  CertificationContainer,
  CertificationArea,
  CertificationTitle,
  CertificationBody,
  CertificationList,
  CertificationBadge,
  CertificationIconWrap,
  CertificationInfo,
  CertificationName,
  CertificationIssuer,
  CertificationId,
} from "./CertificationElements";


const certifications = [
  {
    name: "Agile Project Management",
    issuer: "Coursera",
    date: "Issued Dec 2022",
    credentialId: "3Q854R7ZAQTZ",
  },
];

const CertificateIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M9 13.5L7 22l5-3 5 3-2-8.5" />
  </svg>
);

const About = () => {
  return (
    <>
      <CertificationContainer id="certification">
        <CertificationArea>
          <CertificationTitle>
            <h1>CERTIFICATIONS</h1>
          </CertificationTitle>
          <CertificationBody>
          <CertificationList>
            {certifications.map((cert) => (
              <CertificationBadge key={cert.credentialId}>
                <CertificationIconWrap>
                  <CertificateIcon />
                </CertificationIconWrap>
                <CertificationInfo>
                  <CertificationName>{cert.name}</CertificationName>
                  <CertificationIssuer>
                    {cert.issuer} &middot; {cert.date}
                  </CertificationIssuer>
                  <CertificationId>
                    Credential ID: {cert.credentialId}
                  </CertificationId>
                </CertificationInfo>
              </CertificationBadge>
            ))}
          </CertificationList>
        </CertificationBody>
    
        </CertificationArea>
      </CertificationContainer>
    </>
  );
};

export default About;
