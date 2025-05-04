import { useCV } from "../context/CVContext";

function TemplateRightContainer() {
  const { firstName, surName, profession } = useCV();
  return (
    <div className="p-5  text-[#545454]">
      <div className="flex flex-col items-center justify-center">
        <div>
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
    </div>
  );
}

export default TemplateRightContainer;
