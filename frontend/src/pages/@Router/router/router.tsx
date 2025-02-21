import { createBrowserRouter, Navigate } from "react-router";

import { PublicLayout } from "@/components/layouts/PublicLayout/PublicLayout";
import { LoginPage } from "@/pages/AuthPages/Login/Login.page";
import { RegisterPage } from "@/pages/AuthPages/Register/Register.page";
import { DashboardPage } from "@/pages/Dashboard/Dashboard.page";

import { getPath } from "./router.utils";
import { RoutePath } from "./routes";

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: getPath(RoutePath.LOGIN),
        element: <LoginPage />
      },
      {
        path: getPath(RoutePath.REGISTER),
        element: <RegisterPage />
      },
      { path: "*", element: <Navigate replace to="/" /> },
    ],
  },
]);
