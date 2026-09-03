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
  CertificationLink,
} from "./CertificationElements";

const certifications = [
  {
    name: "Certified ScrumMaster®",
    issuer: "Scrum Alliance",
    date: "Issued Sep 2026",
    credentialId: "001845557",
    credentialUrl: "https://bcert.me/bc/html/show-badge.html?b=ixodvtrp",
  },
  {
    name: "Introduction to Generative AI Learning Path",
    issuer: "Google Cloud",
    date: "Issued Aug 2026",
    credentialId: "XWOJCU8RJMO0",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/XWOJCU8RJMO0",
  },
  {
    name: "Agile Project Management",
    issuer: "Coursera",
    date: "Issued Dec 2022",
    credentialId: "3Q854R7ZAQTZ",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/3Q854R7ZAQTZ",
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

const CertificateLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
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
                    {cert.credentialUrl && (
                      <CertificationLink
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                        <CertificateLinkIcon />
                      </CertificationLink>
                    )}
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
