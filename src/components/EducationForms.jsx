import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useCV } from "../context/CVContext";
import Button from "../ui/Button";
import EducationSingleForm from "./EducationSingleForm";

function EducationForms() {
  const { education, dispatch } = useCV();
  const isEnough = education.length >= 3;

  return (
    <div className="mt-5">
      <div className="flex flex-col gap-5 p-2">
        {education.map((ed) => (
          <div
            className="flex flex-col w-full gap-4 border-[3px] border-solid border-[#e4e1e1]"
            key={ed.id}
          >
            <EducationSingleForm key={ed.id} ed={ed} />
          </div>
        ))}
      </div>
      {isEnough || (
        <Button
          onClick={() => {
            const newEntry = { id: uuidv4() };

            const edCopy = Array.from(education);
            edCopy.push(newEntry);

            dispatch({ type: "setEducation", payload: edCopy });
          }}
        >
          +{education.length < 1 ? "Add education" : " Add one more education"}
        </Button>
      )}
    </div>
  );
}

export default EducationForms;
