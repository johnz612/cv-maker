import { useCV } from "../context/CVContext";
import ContactItemContainer from "./ContactItemContainer";
import {
  IoCallOutline,
  IoLocateOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
import HeadingDetails from "./HeadingDetails";

function LeftContactDetails() {
  const { city, country, postalCode, phone, email } = useCV();
  return (
    <div className="pt-5 mb-3 px-7">
      <HeadingDetails heading={"Contact"} />
      <div className="text-[10px] flex flex-col gap-1">
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
  );
}

export default LeftContactDetails;
