import React from "react";
import Logo from "./small-components/Logo";
import Navbar from "./small-components/Navbar";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 760px;
  margin: 0 3%;
  margin-top: 50px;
  flex-wrap: wrap;

  @media (min-width: 960px) {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1204px) {
    max-width: 1152px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 520px) {
    justify-content: center;
    flex-direction: column;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Navbar />
    </HeaderWrapper>
  );
}

export default Header;
