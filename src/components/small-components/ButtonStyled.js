import styled, { css } from "styled-components";

const Button = styled.button`
  background-image: linear-gradient(to right, #65e2d9, #49d2da, #33c1d8, #2bb0d4, #339ecc);
  padding: 12px 20px;
  border: unset;
  border-radius: 20px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  :focus {
    outline: unset;
  }
  :hover {
    background-image: linear-gradient(to right, #73c6c0, #5cbcc3, #47b2c6, #37a7c8, #339bc8);
  }

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: palevioletred;
      :hover {
        background-image: linear-gradient(to right, #73c6c0, #5cbcc3, #47b2c6, #37a7c8, #339bc8);
      }
    `}

  ${(props) =>
    props.lg &&
    css`
      padding: 14px 30px;
      min-width: 15rem;
    `}
`;

export default Button;
