import { FaRegTrashCan } from "react-icons/fa6";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import { useCV } from "../context/CVContext";
import { useState } from "react";

function SkillInput({ skill }) {
  const { register } = useForm();
  const { skills, dispatch } = useCV();
  const [s, setS] = useState(skill.role);

  function handleDelete() {
    const newSkills = skills.filter((s) => s.id !== skill.id);
    dispatch({ type: "setSkills", payload: newSkills });
  }

  function handleChange(value, key) {
    // Remove the skills to the list if input is empty
    const newSkillList = skills
      .map((s) => {
        if (s.id === skill.id) {
          s =
            value.length !== 0
              ? { id: s.id, role: value }
              : { id: s.id, role: null };
          return s;
        } else {
          return s;
        }
      })
      .filter((item) => item.role !== null);

    dispatch({ type: "setSkills", payload: newSkillList });
  }

  return (
    <div className="flex gap-1 ">
      <Input
        id="role"
        mode="long"
        textMode="small"
        value={s}
        {...register("role", {
          onChange: (e) => {
            setS((s) => e.target.value);
            handleChange(e.target.value, "roles");
          },
        })}
        className="flex-grow"
      />
      <button
        type="button"
        className="flex items-center justify-center p-2 rounded cursor-pointer hover:bg-red-400"
        onClick={handleDelete}
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
}

export default SkillInput;
