import styled from "styled-components";

// import WorkForms from "./CVForms";
import WorkForms from "./WorkForms";

const FormContainer = styled.div`
  width: 100%;
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledH2 = styled.h2`
  font-size: 1.4rem;
  padding: 1.6rem;
  width: 100%;
`;

const StyledP = styled.p`
  font-size: 0.8rem;
  padding: 0 1.6rem;
`;

const MainContainer = styled.div`
  width: 100%;
`;

const InfoContainer = styled.div``;

function WorkHistory() {
  return (
    <MainContainer>
      <InfoContainer>
        <StyledH2>Employment History</StyledH2>
        <StyledP>
          Write 2-4 short & energetic sentences to interest the reader! Mention
          your role, experience & most importantly - your biggest achievements,
          best qualities and skills.
        </StyledP>
      </InfoContainer>
      <FormContainer>
        <WorkForms />
      </FormContainer>
    </MainContainer>
  );
}

export default WorkHistory;
