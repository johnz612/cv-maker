import PersonalDetailsForm from "./PersonalDetailsForm";
import ImageUpload from "../features/ImageUpload";

function PersonalDetails() {
  return (
    <div className="w-full px-8 ">
      <h2 className="py-5 text-2xl ">Personal Details</h2>
      <div className="flex flex-col gap-1.5 px-10 py-5 w-full items-center">
        <div className="w-full mb-5 select-none">
          <ImageUpload />
        </div>
        <div className="w-full">
          <PersonalDetailsForm />
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
