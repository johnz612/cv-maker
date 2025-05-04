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
    case "setWorkHistory":
      // console.log(state.workHistory);
      return { ...state, workHistory: action.payload };
    case "setEducation":
      // console.log(state.workHistory);
      return { ...state, education: action.payload };

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
      workHistory,
      education,
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
        workHistory,
        education,
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
