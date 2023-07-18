import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: null,
    children: [
      {
        path: "/",
        element: null,
      },
      {
        path: "/index",
        element: null,
      },
      {
        path: "/about",
        element: null,
      },
    ],
  },
]);
