import { useCV } from "../context/CVContext";
import CategoryHeading from "./CategoryHeading";
import RightReferenceItem from "./RightReferenceItem";

function RightReferences() {
  const { references } = useCV();

  const isNotEmpty = references.length > 0;
  return (
    isNotEmpty && (
      <div>
        <CategoryHeading heading={"REFERENCES"} />
        <ul className="grid grid-cols-2 gap-y-5 ">
          {references?.map((reference) => (
            <RightReferenceItem key={reference.id} reference={reference} />
          ))}
        </ul>
      </div>
    )
  );
}

export default RightReferences;
