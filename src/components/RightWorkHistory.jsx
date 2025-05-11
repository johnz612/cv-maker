import { useCV } from "../context/CVContext";
import WorkHistoryTemplate from "../ui/WorkHistoryTemplate";
import CategoryHeading from "./CategoryHeading";

function RightWorkHistory() {
  const { workHistory } = useCV();

  const isNotEmpty = workHistory.length > 0;
  return (
    isNotEmpty && (
      <div>
        <CategoryHeading heading={"WORK EXPERIENCE"} />
        <div className="flex flex-col gap-6 ">
          {workHistory?.map((work) => (
            <WorkHistoryTemplate key={work.id} work={work} />
          ))}
        </div>
      </div>
    )
  );
}

export default RightWorkHistory;
