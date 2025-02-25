import { createBrowserRouter, Navigate } from "react-router";

import { privateRoutes } from "./private.router";
import { publicRoutes } from "./public.router";
import { SessionController } from "../RouteControllers/Session.controller";

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <SessionController />,
    children: [
      publicRoutes,
      privateRoutes,
      { path: "*", element: <Navigate replace to="/" /> },
    ]
  },
]);
