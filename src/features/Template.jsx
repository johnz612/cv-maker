import styled from "styled-components";
import style from "./basicInfo.module.css";

import { useCV } from "../context/CVContext";
import WorkHistoryTemplate from "../ui/WorkHistoryTemplate";
import TemplateLeftContainer from "../components/TemplateLeftContainer";
import TemplateRightContainer from "../components/TemplateRightContainer";

function Template() {
  const { workHistory } = useCV();

  return (
    <div className="fixed inset-y-0 right-0 w-full bg-[#8598b2] 	flex items-center justify-center col-start-2 select-none">
      <div className="  h-[850px]  bg-white w-[650px]">
        <div className="grid grid-cols-[230px_420px] h-full">
          <TemplateLeftContainer />
          <TemplateRightContainer />
        </div>
        {workHistory?.map((work, i) => (
          <WorkHistoryTemplate key={i} work={work} />
        ))}
      </div>
    </div>
  );
}

export default Template;
