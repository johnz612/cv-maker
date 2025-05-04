import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./pages/Home";
import Heading from "./pages/PersonalDetails";
import WorkHistory from "./pages/WorkHistory";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Summary from "./pages/Summary";
import Finalize from "./pages/Finalize";
import GlobalStyles from "./styles/GlobalStyles";
import { CVProvider } from "./context/CVContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/heading",
        element: <Heading />,
      },
      {
        path: "/work-history",
        element: <WorkHistory />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
      {
        path: "/finalize",
        element: <Finalize />,
      },
    ],
  },
  {
    element: <Home />,
    errorElement: <Error />,
    path: "/",
  },
]);

function App() {
  // const [count, setCount] = useState(0);

  return (
    <CVProvider>
      <GlobalStyles />

      <RouterProvider router={router} />
    </CVProvider>
  );
}

export default App;
