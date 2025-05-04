import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  max-width: 100%;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

function FormRow({ children }) {
  return <StyledFormRow>{children}</StyledFormRow>;
}

export default FormRow;
