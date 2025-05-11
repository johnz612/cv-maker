import { useCV } from "../context/CVContext";

import CategoryHeading from "./CategoryHeading";
import RightSkillsItem from "./RightSkillsItem";

function RightSkills() {
  const { skills } = useCV();

  const isNotEmpty = skills.length > 0;
  return (
    isNotEmpty && (
      <div>
        <CategoryHeading heading={"SKILLS"} />
        <ul className="grid grid-cols-3 gap-1 justify-items-center">
          {skills?.map((skill) => (
            <RightSkillsItem key={skill.id} skill={skill} />
          ))}
        </ul>
      </div>
    )
  );
}

export default RightSkills;
