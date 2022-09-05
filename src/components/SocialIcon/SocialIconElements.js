import styled from "styled-components";

export const SidebarIcon = styled.div`
  position: fixed;
  left: 40px;
  top: 0%;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const SidebarIconList = styled.div`
  list-style: none;
`;
export const SidebarIconItem = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const SidebarIconLink = styled.a`
  font-size: 18px;
  text-decoration: none;
  transition: 0.5s linear;
  cursor: pointer;
  img {
    width: 5%;
  }
  &:hover {
    color: #b31c34;
    transition: 0.5s linear;
  }
`;
