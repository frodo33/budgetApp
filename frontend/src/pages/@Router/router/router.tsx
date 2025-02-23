import { createBrowserRouter, Navigate } from "react-router";

import { privateRoutes } from "./private.router";
import { publicRoutes } from "./public.router";

export const router = createBrowserRouter([
  {
    path: "/*",
    // element: <PublicLayout />,
    children: [
      publicRoutes,
      privateRoutes,
      { path: "*", element: <Navigate replace to="/" /> },
    ]
  },
]);
