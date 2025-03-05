import { Navigate } from "react-router";

import { PublicLayout } from "@/components/layouts/PublicLayout/PublicLayout";
import { ForgotPasswordPage } from "@/pages/AuthPages/ForgotPassword/ForgotPassword.page";
import { LoginPage } from "@/pages/AuthPages/Login/Login.page";
import { RegisterPage } from "@/pages/AuthPages/Register/Register.page";

import { getPath } from "./router.utils";
import { PublicRoutesController } from "../RouteControllers/PublicRoutes.controller";
import { RoutePath } from "../routes";

export const publicRoutes = {
  element: <PublicRoutesController />,
  children: [
    {
      element: <PublicLayout />,
      children: [
        { path: getPath(RoutePath.LOGIN), element: <LoginPage /> },
        { path: getPath(RoutePath.REGISTER), element: <RegisterPage /> },
        { path: getPath(RoutePath.FORGOT_PASSWORD), element: <ForgotPasswordPage /> },
        { path: "*", element: <Navigate to={getPath(RoutePath.LOGIN, true)} replace /> },
      ]
    },
  ]
}