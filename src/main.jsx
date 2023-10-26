import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ErrorPage from "./pages/ErrorPage";
import Starter from "./pages/Starter";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Starter />
      },
      {
        path: 'Home',
        element: <Starter />
      },
      {
        path: 'AboutMe',
        element: <AboutMe />,
      },
      {
        path: 'Portfolio',
        element: <Portfolio />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
