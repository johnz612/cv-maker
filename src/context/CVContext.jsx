import { createContext, useContext, useReducer } from "react";
import WorkHistory from "../components/WorkHistory";

const CVContext = createContext();

const initialState = {
  firstName: "",
  surName: "",
  profession: "",
  city: "",
  country: "",
  postalCode: "",
  phone: "",
  email: "",
  userPhoto: "",
  profile: "",
  languages: [],
  references: [],
  skills: [],
  workHistory: [],
  education: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setFirstName":
      return { ...state, firstName: action.payload };
    case "setSurName":
      return { ...state, surName: action.payload };
      s;
    case "setProfession":
      return { ...state, profession: action.payload };
    case "setCity":
      return { ...state, city: action.payload };
    case "setCountry":
      return { ...state, country: action.payload };
    case "setPostalCode":
      return { ...state, postalCode: action.payload };
    case "setPhone":
      return { ...state, phone: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setUserPhoto":
      return { ...state, userPhoto: action.payload };
    case "setProfile":
      return { ...state, profile: action.payload };
    case "setWorkHistory":
      return { ...state, workHistory: action.payload };
    case "setLanguages":
      return { ...state, languages: action.payload };
    case "setSkills":
      return { ...state, skills: action.payload };
    case "setEducation":
      return { ...state, education: action.payload };
    case "setReferences":
      return { ...state, references: action.payload };

    default:
      throw new Error("Action unkonwn");
  }
}

function CVProvider({ children }) {
  const [
    {
      firstName,
      surName,
      profession,
      city,
      country,
      postalCode,
      phone,
      email,
      userPhoto,
      languages,
      profile,
      skills,
      workHistory,
      education,
      references,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <CVContext.Provider
      value={{
        firstName,
        surName,
        profession,
        city,
        country,
        postalCode,
        phone,
        email,
        userPhoto,
        dispatch,
        languages,
        profile,
        skills,
        workHistory,
        education,
        references,
      }}
    >
      {children}
    </CVContext.Provider>
  );
}

// Creatinga  custom hook
function useCV() {
  const context = useContext(CVContext);
  if (context === undefined)
    throw new Error("CVContext was used outside of the CVProvider");
  return context;
}

export { CVProvider, useCV };
