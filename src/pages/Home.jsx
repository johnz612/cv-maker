import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";

import Button from "../ui/Button";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/app");
  }

  return (
    <div
      className={
        "relative h-screen bg-center bg-cover bg-[url(../assets/hero.png)]"
      }
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl font-bold text-white">Free CV Maker</h1>
        <p className="mt-4 text-lg text-gray-200">
          Start building your CV for free now!
        </p>
        <button
          onClick={handleClick}
          className="px-3 py-3 hover:scale-105 mt-6 font-black cursor-pointer rounded bg-[#163853]"
        >
          <span className="text-lg font-bold text-white ">Start Building</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
