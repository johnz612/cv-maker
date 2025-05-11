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

function WorkForms() {
  const { workHistory, dispatch } = useCV();

  return (
    <div>
      <div className="flex flex-col gap-5 p-2">
        {workHistory.map((job, i) => (
          <StyledWorkHistoryContainer key={job.id}>
            <WorkSingleForm job={job} />
          </StyledWorkHistoryContainer>
        ))}
      </div>
      <Button
        onClick={() => {
          const newEntry = { id: uuidv4() };
          const updatedWorkHistory = Array.from(workHistory);

          updatedWorkHistory.push(newEntry);
          dispatch({ type: "setWorkHistory", payload: updatedWorkHistory });
        }}
      >
        +
        {workHistory.length < 1 ? "Add experience" : " Add one more experience"}
      </Button>
    </div>
  );
}

export default WorkForms;
