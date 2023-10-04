import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CybertruckPage from "./pages/CybertruckPage";
import ModelSPage from "./pages/ModelSPage";
import ModelXPage from "./pages/ModelXPage";
import MainPage from "./components/MainPage";
import ShopPage from "./pages/ShopPage";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Cart from "./components/cart/Cart";
import CartPage from "./pages/CartPage";

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
        <ModelSPage />
      </MainPage>
    ),
  },
  {
    path: "/model_x",
    element: (
      <MainPage>
        <ModelXPage />
      </MainPage>
    ),
  },
  {
    path: "/cybertruck",
    element: (
      <MainPage>
        <CybertruckPage />
      </MainPage>
    ),
  },
  {
    path: "/shop",
    element: (
      <MainPage>
        <ShopPage />
      </MainPage>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainPage>
        <CartPage />
      </MainPage>
    ),
  },
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
