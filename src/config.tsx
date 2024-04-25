import { createBrowserRouter } from "react-router-dom";

import Home from "./containers/Home/Home";
import HomeLayout from "./pages/Home/HomeLayout";
import About from "./containers/About/About";
import { ABOUT, HOME } from "./constant/routeNames";

export const router = createBrowserRouter([
  {
    path: HOME,
    element: <HomeLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: ABOUT, element: <About /> },
    ],
  },
]);
