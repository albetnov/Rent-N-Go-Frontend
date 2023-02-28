import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home";
import Guest from "../services/Guest";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Guest />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
