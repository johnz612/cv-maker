import LanguagesForms from "./LanguagesForms";

function Languages() {
  return (
    <div className="w-full px-8 mt-5 select-none">
      <div>
        <h2 className="text-2xl">Languages</h2>
      </div>
      <div className="w-full">
        <LanguagesForms />
      </div>
    </div>
  );
}

export default Languages;
