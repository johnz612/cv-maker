import styled from "styled-components";

const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1100px) {
    max-width: 20rem;
  }
`;

export default Form;
