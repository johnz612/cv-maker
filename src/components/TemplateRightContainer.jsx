import { useCV } from "../context/CVContext";
import WorkHistoryTemplate from "../ui/WorkHistoryTemplate";
import RightProfile from "./RightProfile";
import RightReferences from "./RightReferences";
import RightSkills from "./RightSkills";
import RightWorkHistory from "./RightWorkHistory";

function TemplateRightContainer() {
  const { firstName, surName, profession, workHistory } = useCV();
  return (
    <div className="px-5 pb-10 text-[#545454] w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="py-12">
          <p>
            <span className="text-3xl font-bold tracking-tight text-[#545454]">
              {firstName.toUpperCase() || "YourName"}
            </span>
            <span className="ml-1 text-3xl font-normal tracking-tight text-[#163853]">{` ${surName.toUpperCase()}`}</span>
          </p>
          <p className="text-lg font-medium">
            {profession.toUpperCase() || "Profession"}
          </p>
          {/* Small Blue line */}
          {profession ? <div className="w-15 h-1 mt-0.5 bg-[#163853]" /> : null}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <RightProfile />
        <RightSkills />
        <RightWorkHistory />
        <RightReferences />
      </div>
    </div>
  );
}

export default TemplateRightContainer;
