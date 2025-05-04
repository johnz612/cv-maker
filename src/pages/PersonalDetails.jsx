import PersonalDetailsForm from "../components/PersonalDetailsForm";
import ImageUpload from "../features/ImageUpload";

function PersonalDetails() {
  return (
    <div className="grid max-w-screen">
      <h2 className="w-full px-10 py-5 text-2xl">Personal Details</h2>
      <div className="flex flex-col gap-1.5 px-10 py-5 w-full items-center">
        <div className="mb-5">
          <ImageUpload />
        </div>
        <PersonalDetailsForm />
      </div>
    </div>
  );
}

export default PersonalDetails;
