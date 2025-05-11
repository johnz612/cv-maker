import defaultImage from "../assets/default.jpg";
import { useCV } from "../context/CVContext";

import LeftContactDetails from "./LeftContactDetails";
import LeftEducationDetails from "./LeftEducationDetails";
import LeftLanguages from "./LeftLanguages";

function TemplateLeftContainer() {
  const { userPhoto } = useCV();
  return (
    <div id="sidebar" className="bg-[#163853] h-full text-white">
      <div className="flex justify-center px-8 pt-8">
        <img
          className="w-[110px] h-[110px] rounded-full"
          src={(userPhoto && URL.createObjectURL(userPhoto)) || defaultImage}
        />
      </div>
      <LeftContactDetails />
      <LeftEducationDetails />
      <LeftLanguages />
    </div>
  );
}

export default TemplateLeftContainer;
