import React from "react";
import {
  ContactContainer,
  ContactArea,
  ContactTitle,
  ContactBody,
  ContactEmail,
  ContactMenu,
  ContactLink,
  ContactList,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactArea>
          <ContactTitle>
            <h1>CONTACT</h1>
          </ContactTitle>
          <ContactBody>
            <ContactEmail> nimuel24@gmail.com</ContactEmail>
            <ContactMenu>
              <ContactList>
                <ContactLink
                  href="https://github.com/eimanebreja"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </ContactLink>
              </ContactList>
              <ContactList>
                <ContactLink
                  href="https://www.linkedin.com/in/nimuel-eiman/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </ContactLink>
              </ContactList>
            </ContactMenu>
          </ContactBody>
        </ContactArea>
      </ContactContainer>
    </>
  );
};

export default Contact;
