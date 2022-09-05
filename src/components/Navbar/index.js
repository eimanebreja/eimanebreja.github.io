import React from "react";
import {
  Nav,
  NavContent,
  NavLogo,
  NavMenu,
  NavMenuNav,
  NavMenuList,
  NavMenuItem,
  NavMenuLink,
  NavMenuTitle,
  NavMenuTitleLogo,
  NavFabars,
  NavFabarsIconSet,
  NavFabarsHam,
  NavFabarsHamSpan,
} from "./NavbarElements";
import ImgLogo from "../../images/logo.png";
import LinkTitleOne from "../../images/ic_about.png";
import LinkTitleTwo from "../../images/ic_portfolio.png";
import LinkTitleThree from "../../images/ic_skills.png";
import LinkTitleFour from "../../images/ic_contact.png";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ isopen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavContent>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={ImgLogo} alt="Logo" />
          </NavLogo>
          <NavMenu>
            <NavMenuNav isopen={isopen}>
              <NavMenuList>
                <NavMenuItem>
                  <NavMenuLink
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    onClick={toggle}
                  >
                    <NavMenuTitle>ABOUT</NavMenuTitle>
                    <NavMenuTitleLogo>
                      <img src={LinkTitleOne} alt="" />
                    </NavMenuTitleLogo>
                  </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                  <NavMenuLink
                    to="portfolio"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    onClick={toggle}
                  >
                    <NavMenuTitle>PORTFOLIO</NavMenuTitle>
                    <NavMenuTitleLogo>
                      <img src={LinkTitleTwo} alt="" />
                    </NavMenuTitleLogo>
                  </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                  <NavMenuLink
                    to="skills"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    onClick={toggle}
                  >
                    <NavMenuTitle>SKILLS</NavMenuTitle>
                    <NavMenuTitleLogo>
                      <img src={LinkTitleThree} alt="" />
                    </NavMenuTitleLogo>
                  </NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                  <NavMenuLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    onClick={toggle}
                  >
                    <NavMenuTitle>CONTACT</NavMenuTitle>
                    <NavMenuTitleLogo>
                      <img src={LinkTitleFour} alt="" />
                    </NavMenuTitleLogo>
                  </NavMenuLink>
                </NavMenuItem>
              </NavMenuList>
            </NavMenuNav>

            <NavFabars>
              <NavFabarsIconSet onClick={toggle}>
                <NavFabarsHam onClick={toggle}>
                  <NavFabarsHamSpan isopen={isopen}></NavFabarsHamSpan>
                  <NavFabarsHamSpan isopen={isopen}></NavFabarsHamSpan>
                  <NavFabarsHamSpan isopen={isopen}></NavFabarsHamSpan>
                  <NavFabarsHamSpan isopen={isopen}></NavFabarsHamSpan>
                </NavFabarsHam>
              </NavFabarsIconSet>
            </NavFabars>
          </NavMenu>
        </NavContent>
      </Nav>
    </>
  );
};

export default Navbar;
