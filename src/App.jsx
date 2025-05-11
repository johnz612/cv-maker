import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

import { CVProvider } from "./context/CVContext";
import GlobalStyles from "./styles/GlobalStyles";
import Template from "./pages/Template";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    path: "/app",
  },
  {
    element: <Home />,
    errorElement: <Error />,
    path: "/",
  },
  {
    element: <Template />,
    errorElement: <Error />,
    path: "/template",
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
