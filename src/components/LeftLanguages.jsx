import { useCV } from "../context/CVContext";
import HeadingDetails from "./HeadingDetails";
import LeftLanguageItem from "./LeftLanguageItem";

function LeftLanguages() {
  const { languages } = useCV();
  const isNotEmpty = Object.keys(languages).length > 0;

  return (
    isNotEmpty && (
      <div className="px-7 pt-5 mb-3">
        <HeadingDetails heading={"Languages"} />
        {languages.map((lang) => (
          <LeftLanguageItem key={lang.id} lang={lang} />
        ))}
      </div>
    )
  );
}

export default LeftLanguages;
