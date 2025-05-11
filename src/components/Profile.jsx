import styled from "styled-components";

import TextAreaInput from "../ui/TextAreaInput";
import StyledTextArea from "../ui/TextAreaInput";
import { useForm } from "react-hook-form";
import { useCV } from "../context/CVContext";

function Profile() {
  const { register } = useForm();
  const { profile, dispatch } = useCV();

  function handleChange(value) {
    dispatch({ type: "setProfile", payload: value });
  }
  return (
    <div className="w-full px-8 mt-5">
      <div className="mb-4">
        <h2 className="mb-2 text-2xl">Profile</h2>
        <p className="text-sm">
          Write 2-4 short & energetic sentences to interest the reader! Mention
          your role, experience & most importantly - your biggest achievements,
          best qualities and skills.
        </p>
      </div>
      <StyledTextArea
        rows={7}
        cols={30}
        {...register("profile", {
          onChange: (e) => {
            handleChange(e.target.value);
          },
        })}
      />
    </div>
  );
}

export default Profile;
