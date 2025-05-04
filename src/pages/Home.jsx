import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/heading");
  }

  return (
    <div className="flex justify-center items-center h-screen select-none">
      <div>
        <h1 className="text-black font-bold">Free CV Maker</h1>
        <p>Start Building your CV for free now!</p>
        <Button onClick={handleClick}>Start Building</Button>
      </div>
    </div>
  );
}

export default Home;
