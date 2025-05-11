import EducationForms from "./EducationForms";

function Education() {
  return (
    <div className="w-full px-8 ">
      <div>
        <h2 className="mb-2 text-2xl">Education</h2>
        <p className="text-sm">
          A varied education on your resume sums up the value that your
          learnings and background will bring to job.
        </p>
      </div>
      <div className="w-full">
        <EducationForms />
      </div>
    </div>
  );
}

export default Education;
