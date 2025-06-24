import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/Homepage.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <HomePage />,
  },
  {
    path: "/About",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
