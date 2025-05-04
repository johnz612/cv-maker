import styled from "styled-components";

import TextAreaInput from "../ui/TextAreaInput";
import StyledTextArea from "../ui/TextAreaInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
  gap: 1rem;
`;

const StyledH2 = styled.h2`
  font-size: 1.4rem;
  margin-top: 1rem;
  width: 100%;
`;

const StyledP = styled.p`
  font-size: 0.8rem;
  margin-top: 1rem;
`;

const InfoContainer = styled.div``;

function ProfessionalSummary() {
  return (
    <Container>
      <InfoContainer>
        <StyledH2>Professional Summary</StyledH2>
        <StyledP>
          Write 2-4 short & energetic sentences to interest the reader! Mention
          your role, experience & most importantly - your biggest achievements,
          best qualities and skills.
        </StyledP>
      </InfoContainer>
      <StyledTextArea rows={7} cols={30} />
    </Container>
  );
}

export default ProfessionalSummary;
