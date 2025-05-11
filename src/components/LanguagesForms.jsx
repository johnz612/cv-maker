import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCV } from "../context/CVContext";
import Button from "../ui/Button";
import HeadingCategory from "./HeadingCategory";
import SkillInput from "./SkillInput";
import LanguageInput from "./LanguageInput";

function LanguagesForms() {
  const { languages, dispatch } = useCV();

  const [isOpen, setIsOpen] = useState(false);
  const isEnough = languages.length >= 3;

  const isSomeEmpty = languages.some((item) => !item.lang);

  return (
    <div>
      <div className="flex flex-col gap-5 p-2">
        <div className="flex flex-col w-full gap-4 border-[3px] border-solid border-[#e4e1e1]">
          <HeadingCategory
            isOpen={isOpen}
            handleOpen={setIsOpen}
            title={"Languages"}
          />
          {isOpen && (
            <div className="flex flex-col gap-3 pl-8 pr-4">
              {languages.map(
                (language) =>
                  "lang" in language && (
                    <div
                      className="flex flex-col w-full gap-4 "
                      key={language.id}
                    >
                      <LanguageInput language={language} />
                    </div>
                  )
              )}
              <div className="mb-5">
                {!isEnough && !isSomeEmpty ? (
                  <Button
                    onClick={() => {
                      const newEntry = { id: uuidv4(), lang: "" };
                      const langCopy = Array.from(languages);
                      langCopy.push(newEntry);
                      dispatch({ type: "setLanguages", payload: langCopy });
                    }}
                    className="self-start"
                  >
                    +
                    {languages.length < 1
                      ? "Add a language"
                      : " Add one more language"}
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

export default LanguagesForms;
