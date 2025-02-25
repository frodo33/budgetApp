import { Navigate } from "react-router";

import { PublicLayout } from "@/components/layouts/PublicLayout/PublicLayout";
import { DashboardPage } from "@/pages/Dashboard/Dashboard.page";

import { getPath } from "./router.utils";
import { PrivateRoutesController } from "../RouteControllers/PrivateRoutes.controller";
import { RoutePath } from "../routes";

export const privateRoutes = {
  element: <PrivateRoutesController />,
  children: [
    {
      element: <PublicLayout />,
      children: [
        { path: getPath(RoutePath.DASHBOARD), element: <DashboardPage />, index: true },
        { path: "*", element: <Navigate replace to={getPath(RoutePath.DASHBOARD)} /> },
      ]
    },
  ]
}