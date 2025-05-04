import WorkForms from "../components/WorkForms";
import Template from "../features/Template";
import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 2rem;
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

function WorkHistory() {
  const navigate = useNavigate();

  function handleBackClicked() {
    navigate("/heading");
  }

  function handleNextClicked() {
    navigate("/education");
  }

  return (
    <div>
      <h1>Tell us your Work Experience</h1>
      <FormContainer>
        <WorkForms />
        <Template />
      </FormContainer>
      <Button onClick={handleBackClicked}>Back</Button>
      <Button onClick={handleNextClicked}>Next</Button>
    </div>
  );
}

export default WorkHistory;
