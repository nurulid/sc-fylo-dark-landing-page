import React from "react";
import styled from "styled-components";
import iconAccess from "./../img/icon-access-anywhere.svg";
import iconSecurity from "./../img/icon-security.svg";
import iconCollaboration from "./../img/icon-collaboration.svg";
import iconAnyFile from "./../img/icon-any-file.svg";

const StyledSectionFeatures = styled.section`
  background-color: hsl(218, 28%, 13%);
  padding-bottom: 100px;
  padding-top: 40px;
  .card-wrapper {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .card-item {
      flex: 0 0 50%;
      text-align: center;
      padding: 20px 40px;
      margin-bottom: 20px;
      .card-item__img-wrapper {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .card-wrapper {
      width: 90%;
      .card-item {
        flex: 0 0 100%;
      }
    }
  }
`;

function Features() {
  return (
    <StyledSectionFeatures>
      <div className="card-wrapper">
        <div className="card-item">
          <div className="card-item__img-wrapper">
            <img src={iconAccess} alt="" />
          </div>
          <h3>Access your files, anywhere</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla est aut unde rerum
            cum.
          </p>
        </div>
        <div className="card-item">
          <div className="card-item__img-wrapper">
            <img src={iconSecurity} alt="" />
          </div>
          <h3>Access your files, anywhere</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla est aut unde rerum
            cum.
          </p>
        </div>
        <div className="card-item">
          <div className="card-item__img-wrapper">
            <img src={iconCollaboration} alt="" />
          </div>
          <h3>Access your files, anywhere</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla est aut unde rerum
            cum.
          </p>
        </div>
        <div className="card-item">
          <div className="card-item__img-wrapper">
            <img src={iconAnyFile} alt="" />
          </div>
          <h3>Access your files, anywhere</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla est aut unde rerum
            cum.
          </p>
        </div>
      </div>
    </StyledSectionFeatures>
  );
}

export default Features;
