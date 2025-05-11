import { useCV } from "../context/CVContext";
import SkillsForms from "./SkillsForms";

function SkillsList() {
  return (
    <div className="w-full px-8 mt-5 select-none">
      <div className="">
        <h2 className="text-2xl ">Skills</h2>
      </div>
      <div className="w-full">
        <SkillsForms />
      </div>
    </div>
  );
}

export default SkillsList;
