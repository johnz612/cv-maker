import styled, { css } from "styled-components";

const Input = styled.input`
  ${(props) =>
    props.mode === "regular" &&
    css`
      max-width: fit-content;
    `}

  ${(props) =>
    props.mode === "long" &&
    css`
      max-width: 100%;
    `}

    ${(props) =>
    props.mode === "short" &&
    css`
      max-width: 50%;
    `}
font-size: 1.2rem;
  font-family: inherit;
  padding: 0.6rem 0.8rem;
  border-radius: 0.3rem;
  border: none;
  background-color: #e4e8ee;
  &:invalid {
    border: 3px solid red;
  }
`;

Input.defaultProps = {
  mode: "regular",
};

export default Input;
