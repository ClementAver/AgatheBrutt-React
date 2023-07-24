import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Index from "../pages/Index/Index";
import Project from "../pages/Project/Project";
import LuneBleue from "../pages/LuneBleue/LuneBleue";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: null,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/index",
        element: <Index />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Project />,
        children: [
          {
            path: "/projects/lune-bleue",
            element: <LuneBleue />,
          },
        ],
      },
    ],
  },
]);
