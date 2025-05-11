import styled from "styled-components";
import WorkRoleItem from "./WorkRoleItem";

function WorkHistoryTemplate({ work }) {
  return (
    <div className="flex px-3 text-xs">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold">{work.employer}</p>
        <p className="font-semibold">{work.jobTitle}</p>

        <ul className="flex flex-col gap-1 list-disc ml-7">
          {work?.roles?.map((role) => (
            <WorkRoleItem role={role} key={role.id} />
          ))}
        </ul>
      </div>
      <div className="ml-auto">
        <p className="text-sm">
          {work.startYear || null} {work.endYear ? `- ${work.endYear}` : null}
        </p>
      </div>
    </div>
  );
}

export default WorkHistoryTemplate;
