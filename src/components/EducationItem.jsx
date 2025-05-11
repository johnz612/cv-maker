function EducationItem({ ed }) {
  const isNotEmpty = Object.keys(ed).length > 1;
  return (
    isNotEmpty && (
      <div className="flex flex-col gap-1 mt-2 text-[10px]">
        <div>
          <div className="text-[12px] font-medium">{ed.course}</div>
          {ed.startYear} - {ed.endYear}
        </div>
        <div>{ed.schoolName}</div>
        <div>{ed.location}</div>
        <div>{ed.achievement ? `- ${ed.achievement}` : null}</div>
      </div>
    )
  );
}

export default EducationItem;
