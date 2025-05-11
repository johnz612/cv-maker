import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

function ViewTemplateButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/template");
  }
  return (
    <div className="fixed  right-2 top-5 select-none hover:bg-[#163853] cursor-pointer  hover:text-white p-1 rounded ">
      <button
        className="flex items-center gap-1 cursor-pointer "
        onClick={handleClick}
      >
        <FaArrowAltCircleRight />
        <span>View Resume</span>
      </button>
    </div>
  );
}

export default ViewTemplateButton;
