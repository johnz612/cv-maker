import { FaRegTrashCan } from "react-icons/fa6";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import { useCV } from "../context/CVContext";
import { useState } from "react";

function LanguageInput({ language }) {
  const { register } = useForm();
  const { languages, dispatch } = useCV();
  const [l, setL] = useState(language.lang);

  function handleDelete() {
    const newLanguages = languages.filter((l) => l.id !== language.id);
    dispatch({ type: "setLanguages", payload: newLanguages });
  }

  function handleChange(value) {
    // Remove the skills to the list if input is empty
    const newLanguageList = languages
      .map((item) => {
        if (item.id === language.id) {
          item =
            value.length !== 0
              ? { id: item.id, lang: value }
              : { id: item.id, lang: null };
          return item;
        } else {
          return item;
        }
      })
      .filter((item) => item.lang !== null);

    dispatch({ type: "setLanguages", payload: newLanguageList });
  }

  return (
    <div className="flex gap-1 ">
      <Input
        id="role"
        mode="long"
        textMode="small"
        value={l}
        {...register("role", {
          onChange: (e) => {
            setL(() => e.target.value);
            handleChange(e.target.value);
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

export default LanguageInput;
