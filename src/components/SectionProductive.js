import React from "react";
import styled from "styled-components";

import imageProductive from "./../img/illustration-stay-productive.png";
import iconArrowRight from "./../img/icon-arrow.svg";

const SectionProductiveWrapper = styled.section`
  background-color: hsl(218, 28%, 13%);
  padding-bottom: 100px;
  padding-top: 40px;
  .productive-wrapper {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  div {
    flex: 0 1 50%;
  }
  .image-wrapper {
    padding-right: 40px;
    box-sizing: border-box;
  }
  .image-wrapper img {
    width: 100%;
    height: 100%;
  }
  h2 {
    font-size: 35px;
    line-height: 1.3;
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
  }
  a {
    color: #65e2d9;
    font-size: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #65e2d9;
    :hover {
      opacity: .8;
    }
  }
  a img {
    vertical-align: middle;
  }

  @media screen and (max-width: 768px) {
    div {
      flex: 0 1 100%;
    }
  }
`;

const SectionProductive = () => {
  return (
    <SectionProductiveWrapper>
      <div className="productive-wrapper">
        <div className="image-wrapper">
          <img src={imageProductive} alt="" />
        </div>
        <div>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ullam similique
            sint libero cum iure aspernatur, minima ducimus quia vel, fugit pariatur nisi eveniet
            aliquid.
          </p>
          <a href="#">
            See how Fylo works <img src={iconArrowRight} alt="Arrow Icon" />{" "}
          </a>
        </div>
      </div>
    </SectionProductiveWrapper>
  );
};

export default SectionProductive;
