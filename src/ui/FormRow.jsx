import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

function FormRow({ children }) {
  return <StyledFormRow>{children}</StyledFormRow>;
}

export default FormRow;
