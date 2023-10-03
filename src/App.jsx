import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CybertruckPage from "./pages/CybertruckPage";
import ModelSPage from "./pages/ModelSPage";
import ModelXPage from "./pages/ModelXPage";
import MainPage from "./components/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainPage>
        <Home />
      </MainPage>
    ),
  },
  {
    path: "/model_s",

    element: (
      <MainPage>
        <ModelSPage />,
      </MainPage>
    ),
  },
  {
    path: "/model_x",
    element: (
      <MainPage>
        <ModelXPage />,
      </MainPage>
    ),
  },
  {
    path: "/cybertruck",
    element: (
      <MainPage>
        <CybertruckPage />,
      </MainPage>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
