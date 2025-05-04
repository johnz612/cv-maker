import styled from "styled-components";

const StyledFormFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 500;
`;

const Error = styled.span`
  color: red;
  font-size: 0.7rem;
  font-weight: 600;
`;

function FormField({ label, error, children }) {
  return (
    <StyledFormFields>
      {label && <Label>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormFields>
  );
}

export default FormField;
