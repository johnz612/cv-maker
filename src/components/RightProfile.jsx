import { useCV } from "../context/CVContext";
import CategoryHeading from "./CategoryHeading";

function RightProfile() {
  const { profile } = useCV();
  return (
    profile && (
      <div className="flex flex-col w-fullw-full">
        <CategoryHeading heading={"PROFILE"} />
        <div className="w-full ">
          <p className="text-xs text-wrap">{profile}</p>
        </div>
      </div>
    )
  );
}

export default RightProfile;
