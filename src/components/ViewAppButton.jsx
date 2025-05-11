import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ViewAppButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/app");
  }
  return (
    <div className="fixed bg-white left-2 top-2 hover:bg-[#163853] select-none cursor-pointer  hover:text-white p-1 rounded">
      <button
        className="flex items-center gap-1 cursor-pointer"
        onClick={handleClick}
      >
        <FaArrowAltCircleLeft />
        <span>Back</span>
      </button>
    </div>
  );
}

export default ViewAppButton;
