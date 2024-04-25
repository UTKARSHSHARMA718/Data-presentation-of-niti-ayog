import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "./pages/Home/HomeLayout";
import { ABOUT, HOME } from "./constant/routeNames";

export const router = createBrowserRouter([
  {
    path: HOME,
    element: <HomeLayout />,
    children: [{ path: "", element: <p>Hellodc nwedkewn </p> },{ path: ABOUT, element: <p>About</p> }],
  },
]);
