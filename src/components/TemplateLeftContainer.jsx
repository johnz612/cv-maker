import defaultImage from "../assets/default.jpg";
import { useCV } from "../context/CVContext";
import {
  IoCallOutline,
  IoLocateOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
import HeadingDetails from "./HeadingDetails";
import ContactItemContainer from "./ContactItemContainer";

function TemplateLeftContainer() {
  const { city, country, postalCode, phone, email, userPhoto } = useCV();
  return (
    <div className="bg-[#163853] h-full text-white">
      <div className="flex justify-center px-8 pt-8">
        <img
          className="w-[110px] h-[110px] rounded-full"
          src={(userPhoto && URL.createObjectURL(userPhoto)) || defaultImage}
        />
      </div>
      <div className="p-8">
        <HeadingDetails heading={"Contact"} />
        <div className="text-[12px] flex flex-col gap-1.5">
          <ContactItemContainer>
            <IoLocateOutline className="flex-shrink-0 w-3 h-3" />
            <p>
              {city || "City"}, {country || "Country"},{" "}
              {postalCode || "Postal Code"}
            </p>
          </ContactItemContainer>
          <ContactItemContainer>
            <IoCallOutline className="flex-shrink-0 w-3 h-3" />
            <p>{phone || "Phone"}</p>
          </ContactItemContainer>
          <ContactItemContainer>
            <IoMailOpenOutline className="flex-shrink-0 w-3 h-3" />
            <p>{email || "Email"}</p>
          </ContactItemContainer>
        </div>
      </div>
      <div className="px-8">
        <HeadingDetails heading={"Education"} />
      </div>
    </div>
  );
}

export default TemplateLeftContainer;
