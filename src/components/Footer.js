import React from "react";
import styled from "styled-components";
import Logo from "./small-components/Logo";

const FooterWrapper = styled.footer`
  min-height: 200px;
  background-color: hsl(216, 53%, 9%);
  padding: 60px 0;
  font-size: 16px;
  Logo {
    margin-bottom: 30px;
  }
  .footer-wrapper {
    width: 80%;
    margin: 0 auto;
    height: 100%;
  }
  .footer-details {
    display: grid;
    grid-template-columns: 4fr 2fr 1fr 1fr 1fr;
    grid-gap: 50px;
    margin-top: 15px;
    ul {
      padding: 0;
      list-style: none;
      li {
        margin-bottom: 15px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .footer-details {
      display: block;
      & > div {
        margin-bottom: 30px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-wrapper">
        <Logo />
        <div className="footer-details">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit odio consequuntur
            deserunt accusamus numquam ullam dolore cumque, adipisci.
          </div>
          <div>
            <ul>
              <li>+1-456-2423-342</li>
              <li>example@fylo.com</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="">fb</a>
            <a href="">twitter</a>
            <a href="">ig</a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
