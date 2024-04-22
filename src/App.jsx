import React from "react";

import Home from "./components/Page/Home";
import Features from "./components/Page/Features";
import Experties from "./components/Page/Experties";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Outlet from "./components/navbar/Outlet";
import Blog from "./components/Page/Blog";
import ReferEarn from "./components/Page/ReferEarn";
import Contact from "./components/Page/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/experties",
        element: <Experties />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/refer",
        element: <ReferEarn />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <h1>
        <RouterProvider router={router} />
      </h1>
    </div>
  );
}

export default App;
