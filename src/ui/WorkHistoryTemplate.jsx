import styled from "styled-components";

const StyledContainer = styled.div``;

const StyledH2 = styled.h2``;

const StyledP = styled.p``;

function WorkHistoryTemplate({ work }) {
  let newDescription = work?.description?.split("\n");
  return (
    <StyledContainer>
      <StyledH2>{work.jobTitle}</StyledH2>
      <StyledP>{work.employer}</StyledP>
      <StyledP>{work.location}</StyledP>
      <StyledP>{work.startMonth}</StyledP>
      <StyledP>{work.startYear}</StyledP>
      <StyledP>{work.endMonth}</StyledP>
      <StyledP>{work.endYear}</StyledP>
      {newDescription?.map((des) => (
        <StyledP key={des}>{des}</StyledP>
      ))}
    </StyledContainer>
  );
}

export default WorkHistoryTemplate;
