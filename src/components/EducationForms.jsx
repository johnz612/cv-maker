import { v4 as uuidv4 } from "uuid";
import WorkSingleForm from "./WorkSingleForm";
import Button from "../ui/Button";
import styled from "styled-components";
import { useCV } from "../context/CVContext";
import EducationSingleForm from "./EducationSingleForm";

const StyledWorkHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border: 3px solid #e4e1e1;
`;

const MainContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function EducationForms() {
  const { education, dispatch } = useCV();
  // console.log(workHistory);

  return (
    <div>
      <MainContainer>
        {education.map((job, i) => (
          <StyledWorkHistoryContainer key={i}>
            <EducationSingleForm job={job} />
          </StyledWorkHistoryContainer>
        ))}
      </MainContainer>
      <Button
        onClick={() => {
          let id = uuidv4();
          education.push({ id });
          dispatch({ type: "setEducation", payload: education });
        }}
      >
        +{education.length < 1 ? "Add education" : " Add one more education"}
      </Button>
    </div>
  );
}

export default EducationForms;
