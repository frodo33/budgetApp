import { createBrowserRouter, Navigate } from "react-router";

import { LoginPage } from "@/pages/AuthPages/Login/Login.page";
import { DashboardPage } from "@/pages/Dashboard/Dashboard.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  { path: "*", element: <Navigate replace to="/" /> },
]);
