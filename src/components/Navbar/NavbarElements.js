import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  max-width: 1280px;
  margin: 0 auto;

  @media only screen and (max-width: 700px) {
    padding: 20px 10px;
  }
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  text-decoration: none;

  img {
    width: 120px;
    display: block;
  }

  @media only screen and (max-width: 700px) {
    img {
      width: 80px;
    }
  }
`;

export const NavMenu = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavMenuNav = styled.div`
  overflow: hidden;

  transform: ${({ isopen }) =>
    isopen ? "translateY(0)" : "translateY(-150px)"};
`;

export const NavMenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;
export const NavMenuItem = styled.li`
  padding: 0px 20px;
  list-style: none;
  right: ${({ isopen }) => (isopen ? "-150px" : "0px")};
  transition: ${({ isopen }) => (isopen ? "0.3s ease-out" : "0s")};
  opacity: ${({ isopen }) => (isopen ? "0" : "1")};
  position: ${({ isopen }) => (isopen ? "absolute" : "relative")};
  &:first-of-type {
    margin-left: 0;
    transition-delay: ${({ isopen }) => (isopen ? "0s" : "0.6s")};
  }

  &:nth-of-type(2) {
    transition-delay: ${({ isopen }) => (isopen ? "0s" : "0.4s")};
  }

  &:nth-of-type(3) {
    transition-delay: ${({ isopen }) => (isopen ? "0s" : "0.2s")};
  }

  &:nth-of-type(4) {
    transition-delay: ${({ isopen }) => (isopen ? "0s" : "0s")};
  }

  @media only screen and (max-width: 700px) {
    padding: 0px 10px;
  }
`;

export const NavMenuLink = styled(LinkS)`
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: 0.3s;
  text-decoration: none;
  color: #dedede;
  position: relative;

  &:hover {
    color: #b31c34;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #b31c34;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
`;

export const NavMenuTitle = styled.span`
  display: block;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavMenuTitleLogo = styled.div`
  display: none;

  @media only screen and (max-width: 700px) {
    display: block;
    img {
      width: 25px;
    }
  }
`;

export const NavFabars = styled.div`
  width: 50px;
  height: 45px;
  position: relative;
  padding-left: 20px;

  @media only screen and (max-width: 700px) {
    height: 50px;
    display: flex;
  }
`;

export const NavFabarsIconSet = styled.div`
  width: 50px;
  height: 45px;
  position: relative;
  padding-left: 20px;
  @media only screen and (max-width: 700px) {
    padding-left: 30px;
  }
`;

export const NavFabarsHam = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: -17px;
  right: 0;
  cursor: pointer;
  @media only screen and (max-width: 700px) {
    width: 50px;
  }
`;

export const NavFabarsHamSpan = styled.span`
  display: block;
  width: 30px;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background: ${({ isopen }) => (isopen ? "#555" : "#b31c34")};

  &:nth-child(1) {
    top: ${({ isopen }) => (isopen ? "26px" : "30px")};
    opacity: ${({ isopen }) => (isopen ? "0" : "1")};
    transition: ${({ isopen }) =>
      isopen ? "0.3s ease-in-out" : "0.3s ease-in-out 0.5s"};
  }

  &:nth-child(2) {
    top: ${({ isopen }) => (isopen ? "40px" : "40px")};
    transform: ${({ isopen }) => (isopen ? "rotate(45deg)" : "rotate(0deg)")};
    transition: ${({ isopen }) =>
      isopen ? "0.3s ease-in-out 0.5s" : " 0.3s ease-in-out"};
  }

  &:nth-child(3) {
    top: ${({ isopen }) => (isopen ? "40px" : "40px")};
    transform: ${({ isopen }) => (isopen ? "rotate(-45deg)" : "rotate(0deg)")};
    transition: ${({ isopen }) =>
      isopen ? "0.3s ease-in-out 0.5s" : " 0.3s ease-in-out"};
  }

  &:nth-child(4) {
    bottom: ${({ isopen }) => (isopen ? "26px" : "30px")};
    opacity: ${({ isopen }) => (isopen ? "0" : "1")};
    transition: ${({ isopen }) =>
      isopen ? "0.3s ease-in-out" : "0.3s ease-in-out 0.5s"};
  }
`;
