import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../components/layout/AdminLayout";
import About from "../pages/About";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <h1>THis is Admin Dashbord</h1>,
      },
      {
        path: "add-admin",
        element: <h1>THis is add Admin page</h1>,
      },
    ],
  },
]);

export default router;
