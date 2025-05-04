import styled from "styled-components";
import Button from "./Button";

const StyledH1 = styled.h1`
  size: 4rem;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Error() {
  return (
    <StyledContainer>
      <StyledH1>Ooops!</StyledH1>
      <p>404 Page not found</p>
      <p>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable
      </p>
      <Button>Return to Homepage</Button>
    </StyledContainer>
  );
}

export default Error;
