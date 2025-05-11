import { useCV } from "../context/CVContext";
import Button from "../ui/Button";
import ReferenceSingleForm from "./ReferenceSingleForm";
import { v4 as uuidv4 } from "uuid";

function ReferenceForms() {
  const { references, dispatch } = useCV();
  const isEnough = references.length >= 4;

  return (
    <div className="mt-1">
      <div className="flex flex-col gap-5 p-2">
        {references.map((reference) => (
          <div
            className="flex flex-col w-full gap-4 border-[3px] border-solid border-[#e4e1e1]"
            key={reference.id}
          >
            <ReferenceSingleForm key={reference.id} reference={reference} />
          </div>
        ))}
      </div>
      {isEnough || (
        <Button
          onClick={() => {
            const newEntry = { id: uuidv4() };

            const copy = Array.from(references);
            copy.push(newEntry);

            dispatch({ type: "setReferences", payload: copy });
          }}
        >
          +{references.length < 1 ? "Add reference" : " Add one more reference"}
        </Button>
      )}
    </div>
  );
}

export default ReferenceForms;
