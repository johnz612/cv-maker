import Header from "./Header";

import Education from "../components/Education";
import Languages from "../components/Languages";
import Profile from "../components/Profile";
import SkillsList from "../components/SkillsList";
import WorkHistory from "../components/WorkHistory";
import PersonalDetails from "../components/PersonalDetails";
import Reference from "../components/Reference";
import ViewTemplateButton from "../components/ViewTemplateButton";
import Template from "../pages/Template";

function AppLayout() {
  return (
    <div className="h-screen">
      <div className="xl:grid w-screen xl:grid-cols-[45%_65%] p-3 overflow-scroll flex flex-col items-center">
        <ViewTemplateButton />
        <div className="flex flex-col gap-2 md:w-[80%]  xl:w-full w-full ">
          <Header />
          <PersonalDetails />
          <Education />
          <Languages />
          <Profile />
          <SkillsList />
          <WorkHistory />
          <Reference />
        </div>
        <div className="hidden xl:block">
          <Template />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
