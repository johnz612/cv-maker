import { useCV } from "../context/CVContext";
import EducationItem from "./EducationItem";
import HeadingDetails from "./HeadingDetails";

function LeftEducationDetails() {
  const { education } = useCV();

  const isNotEmpty = Object.keys(education).length > 0;

  return (
    isNotEmpty && (
      <div className="px-7">
        <HeadingDetails heading={"Education"} />
        <div className="flex flex-col gap-2">
          {education.map((ed) => (
            <EducationItem key={ed.id} ed={ed} />
          ))}
        </div>
      </div>
    )
  );
}

export default LeftEducationDetails;
