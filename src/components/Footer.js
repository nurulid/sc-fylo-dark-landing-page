import React from "react";
import styled from "styled-components";
import Logo from "./small-components/Logo"

const FooterWrapper = styled.footer`
  height: 200px;
  background-color: hsl(216, 53%, 9%);
  padding: 60px 0;
  .footer-wrapper{
    width: 80%;
    margin: 0 auto;
    height: 100%;
  }
  .footer-details {
    display: flex;
    justify-content: space-between;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-wrapper">
        <Logo/>
        <div className="footer-details">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
