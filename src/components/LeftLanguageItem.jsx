function LeftLanguageItem({ lang }) {
  return lang.lang && <div className="mt-2 text-[12px]">- {lang.lang}</div>;
}

export default LeftLanguageItem;
