import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import Support from "../pages/support/Support";

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
]);
