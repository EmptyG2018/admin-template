import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider as SystemRouterProvider,
  Navigate,
} from "react-router-dom";

import Auth from "./components/Auth";
import WorkLayout from "./Layouts/WorkLayout";

import Workplace from "./pages/Workplace";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import NotAuthorized from "./pages/NotAuthorized";
import Demo from "./pages/Demo";

const RouterProvider: React.FC = () => {
  const [routerTrees] = useState([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Auth element={<WorkLayout />} />,
      children: [
        {
          path: "/workplace",
          element: <Auth element={<Workplace />} />,
        },
      ],
    },
    {
      path: "/demo",
      element: <Demo />,
    },
    {
      path: "/403",
      element: <NotAuthorized />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  const routes = createBrowserRouter(routerTrees);

  return (
    <SystemRouterProvider router={routes} fallbackElement={<div>11</div>} />
  );
};

export default RouterProvider;
