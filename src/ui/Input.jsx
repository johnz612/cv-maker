import styled, { css } from "styled-components";

const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => !["textMode", "mode"].includes(prop),
})`
  ${(props) =>
    props.mode === "regular" &&
    css`
      max-width: fit-content;
    `}

  ${(props) =>
    props.mode === "long" &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.mode === "short" &&
    css`
      width: 50%;
    `}

  ${(props) =>
    props.textMode === "small" &&
    css`
      font-size: 0.8rem;
    `}

  ${(props) =>
    props.textMode === "normal" &&
    css`
      font-size: 1.2rem;
    `}

  font-family: inherit;
  padding: 0.6rem 0.6rem;
  border-radius: 0.3rem;
  border: none;
  background-color: #e4e8ee;

  &:invalid {
    outline: 2px solid red;
  }
`;

Input.defaultProps = {
  mode: "regular",
  textMode: "normal",
};

export default Input;
