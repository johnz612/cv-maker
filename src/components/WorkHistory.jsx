import styled from "styled-components";

// import WorkForms from "./CVForms";
import WorkForms from "./WorkForms";

const StyledP = styled.p`
  font-size: 0.8rem;
  padding: 0 1.6rem;
`;

function WorkHistory() {
  return (
    <div className="w-full px-8 mt-5">
      <div>
        <h2 className="mb-2 text-2xl">Employment History</h2>
        <p className="text-sm">
          Write 2-4 short & energetic sentences to interest the reader! Mention
          your role, experience & most importantly - your biggest achievements,
          best qualities and.
        </p>
      </div>
      <div className="w-full">
        <WorkForms />
      </div>
    </div>
  );
}

export default WorkHistory;
