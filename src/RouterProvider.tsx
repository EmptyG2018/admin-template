import {
  createBrowserRouter,
  RouterProvider as SystemRouterProvider,
  Navigate,
} from "react-router-dom";
import React from "react";

import WorkLayout from "./Layouts/WorkLayout";

import Workplace from "./pages/Workplace";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Demo from "./Demo";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <WorkLayout />,
    children: [
      {
        path: "/workplace",
        element: <Workplace />,
      },
    ],
  },
  {
    path: "/demo",
    element: <Demo />,
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

const RouterProvider: React.FC = () => {
  return (
    <SystemRouterProvider router={routes} fallbackElement={<div>11</div>} />
  );
};

export default RouterProvider;
