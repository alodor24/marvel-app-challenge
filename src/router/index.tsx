import { createBrowserRouter } from "react-router-dom";
import Characters from "../pages/Characters";
import Comics from "../pages/Comics";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/comics",
    element: <Comics />,
  },
]);
