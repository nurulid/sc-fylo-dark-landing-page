import React from "react";
import styled from "styled-components";
import Button from "./small-components/ButtonStyled";

const SectionAccessWrapper = styled.section`
  background: linear-gradient(to bottom, #181f2a 65%, #0b1523 35%);
  padding-top: 40px;
  .access-wrapper {
    background: hsl(217, 28%, 15%);
    width: 60%;
    margin: 0 auto;
    text-align: center;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    h2 {
      margin-top: 0;
      font-size: 35px;
    }
    p {
      margin-bottom: 30px;
      padding: 0 40px;
    }
    .input {
      padding: 12px 20px;
      border-radius: 25px;
      border: unset;
      /* margin-right: 20px; */
      width: 70%;
      :active {
        outline: none;
      }
    }
  }
  .sign-up-wrapper {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
  }

  @media screen and (max-width: 768px) {
    .access-wrapper {
      width: 90%;
      p {
        padding: 0;
      }
      input {
        width: 100%!important;
        margin-bottom: 15px;
      }
    }
    .sign-up-wrapper {
      display: block;
      padding: 0;
    }
  }
`;

const SectionAccess = () => {
  return (
    <SectionAccessWrapper>
      <div className="access-wrapper">
        <h2>Get early access today</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolorum nobis ut incidunt
          tempore et, commodi illum. Enim id iusto ab nihil facere incidunt quibusdam, eaque
          laboriosam.
        </p>
        <div className="sign-up-wrapper">
          <input type="text" className="input" />
          <Button>Get Started For Free</Button>
        </div>
      </div>
    </SectionAccessWrapper>
  );
};

export default SectionAccess;
