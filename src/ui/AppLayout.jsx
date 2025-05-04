import Loader from "./Loader";
import Header from "./Header";
import styled from "styled-components";
import Template from "../features/Template";

import PersonalDetails from "../pages/PersonalDetails";
import ProfessionalSummary from "../components/ProfessionalSummary";
import WorkHistory from "../components/WorkHistory";
import Education from "../components/Education";

function AppLayout() {
  return (
    <div className="h-screen">
      <div className="grid w-screen grid-cols-[45%_65%] p-3 overflow-scroll">
        <div className="flex flex-col w-full">
          <Header />
          <PersonalDetails />
          <ProfessionalSummary />
          <WorkHistory />
          <Education />
        </div>
        <Template />
      </div>
    </div>
  );
}

export default AppLayout;
