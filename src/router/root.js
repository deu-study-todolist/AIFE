import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import Support from "../pages/support/SupportPage";
import Product from "../pages/product/ProductPage";
import MemberPage from "../pages/member/MemberPage";
import FeaturesPage from "../pages/features/FeaturesPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainPage />,
    errorElement: "",
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/member",
    element: <MemberPage />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
]);
