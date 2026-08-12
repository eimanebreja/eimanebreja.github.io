import React from "react";
import {
  ContactContainer,
  ContactArea,
  ContactTitle,
  ContactAccentLine,
  ContactIntro,
  ContactBody,
  ContactEmail,
  ContactEmailIcon,
  ContactMenu,
  ContactLink,
  ContactLinkIcon,
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
          <ContactIntro>
            Have a project in mind or an opportunity to discuss? I'd love to
            hear from you.
          </ContactIntro>
          <ContactBody>
            <ContactEmail href="mailto:nimuel24@gmail.com">
              <ContactEmailIcon>&#9993;</ContactEmailIcon>
              nimuel24@gmail.com
            </ContactEmail>
            <ContactMenu>
              <ContactList>
                <ContactLink
                  href="https://github.com/eimanebreja"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ContactLinkIcon>&#9670;</ContactLinkIcon>
                  Github
                </ContactLink>
              </ContactList>
              <ContactList>
                <ContactLink
                  href="https://www.linkedin.com/in/nimuel-eiman/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ContactLinkIcon>&#9670;</ContactLinkIcon>
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
