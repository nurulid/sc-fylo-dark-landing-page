import React from "react";
import styled from "styled-components";
import Button from "./small-components/ButtonStyled";
import imgIntro from "./../img/illustration-intro.png";
import bgIntro from "./../img/bg-curvy-desktop.svg";

const SectionStart = styled.section`
  padding-bottom: 100px;
  background-image: url(${bgIntro});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  .section-content-wrapper {
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }
  .image-wrapper img {
    width: 100%;
    height: 100%;
    margin-top: 30px;
  }
  h2 {
    font-size: 35px;
    line-height: 1.3;
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
    margin: 0 30px 30px 30px;
  }

  @media screen and (max-width: 768px) {
    .section-content-wrapper {
      width: 90%;
    }
    h2 {
      line-height: 1.3;
    }
  }
`;

const GetStarted = () => {
  return (
    <SectionStart>
      <div className="section-content-wrapper">
        <div className="image-wrapper">
          <img src={imgIntro} alt="Illustration Intro" />
        </div>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere ex nisi magni
          eius possimus impedit similique maiores nostrum velit?
        </p>
        <Button lg>Get Started</Button>
      </div>
    </SectionStart>
  );
};

export default GetStarted;
