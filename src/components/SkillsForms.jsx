import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCV } from "../context/CVContext";
import Button from "../ui/Button";
import HeadingCategory from "./HeadingCategory";
import SkillInput from "./SkillInput";

function SkillsForms() {
  const { skills, dispatch } = useCV();

  const [isOpen, setIsOpen] = useState(false);
  let isEnough = skills.length >= 9;

  const isSomeEmpty = skills.some((s) => !s.role);

  return (
    <div>
      <div className="flex flex-col gap-5 p-2">
        <div className="flex flex-col w-full gap-4 border-[3px] border-solid border-[#e4e1e1]">
          <HeadingCategory
            isOpen={isOpen}
            handleOpen={setIsOpen}
            title={"Skills"}
          />
          {isOpen && (
            <div className="flex flex-col gap-3 pl-8 pr-4">
              {skills.map(
                (skill) =>
                  "role" in skill && (
                    <div className="flex flex-col w-full gap-4 " key={skill.id}>
                      <SkillInput skill={skill} />
                    </div>
                  )
              )}
              <div className="mb-5">
                {!isEnough && !isSomeEmpty ? (
                  <Button
                    onClick={() => {
                      const newEntry = { id: uuidv4(), role: "" };
                      const skillsCopy = Array.from(skills);
                      skillsCopy.push(newEntry);
                      dispatch({ type: "setSkills", payload: skillsCopy });
                    }}
                    className="self-start"
                  >
                    +{skills.length < 1 ? "Add a skill" : " Add one more skill"}
                  </Button>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SkillsForms;
