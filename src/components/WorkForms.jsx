import { v4 as uuidv4 } from "uuid";
import WorkSingleForm from "./WorkSingleForm";
import Button from "../ui/Button";
import styled from "styled-components";
import { useCV } from "../context/CVContext";

const StyledWorkHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border: 3px solid #e4e1e1;
`;

const MainContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function WorkForms() {
  const { workHistory, dispatch } = useCV();
  console.log(workHistory);

  return (
    <div>
      <MainContainer>
        {workHistory.map((job, i) => (
          <StyledWorkHistoryContainer key={i}>
            <WorkSingleForm job={job} />
          </StyledWorkHistoryContainer>
        ))}
      </MainContainer>
      <Button
        onClick={() => {
          let id = uuidv4();
          workHistory.push({ id, jobTitle: "" });
          dispatch({ type: "setWorkHistory", payload: workHistory });
        }}
      >
        +
        {workHistory.length < 1 ? "Add experience" : " Add one more experience"}
      </Button>
    </div>
  );
}

export default WorkForms;
