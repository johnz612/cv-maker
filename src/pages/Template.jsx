import { useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { useLocation } from "react-router-dom";
import TemplateLeftContainer from "../components/TemplateLeftContainer";
import TemplateRightContainer from "../components/TemplateRightContainer";
import ViewAppButton from "../components/ViewAppButton";
import { generatePDF } from "../helpers/helpers";

function Template() {
  const refElement = useRef();
  const { pathname } = useLocation();

  const isSeparatePage = pathname.includes("template");

  return (
    <div
      className={`${
        isSeparatePage ? "w-full" : "xl:w-[55%]"
      }  h-screen xl:fixed inset-y-0 right-0  bg-[#8598b2] 	flex items-center justify-center col-start-2 overflow-hidden`}
    >
      {isSeparatePage && <ViewAppButton />}
      <button
        className="absolute flex items-center gap-2 p-1 bg-[#163853] rounded top-2 right-2 cursor-pointer hover:scale-105"
        onClick={() => generatePDF(refElement)}
      >
        <MdOutlineFileDownload className="text-white" />
        <span className="text-white">Download</span>
      </button>

      <div
        id="printable"
        className=" h-[90vh] max-h-[850px] bg-white w-[650px] overflow-x-hidden  overflow-y-auto scrollbar-thin
    hover:scrollbar-track-gray-300 hover:scrollbar-thumb-blue-700 flex items-center justify-center"
        ref={refElement}
      >
        <div className=" grid grid-cols-[200px_450px] h-full w-full">
          <TemplateLeftContainer />
          <TemplateRightContainer />
        </div>
      </div>
    </div>
  );
}

export default Template;
