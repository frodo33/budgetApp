import { useMemo } from "react";
import { Navigate, Outlet } from "react-router";

import { useSelectToken, useSelectUserData } from "@/store/auth/auth.selectors";

import { getPath } from "../router/router.utils";
import { RoutePath } from "../routes";

export const PublicRoutesController = () => {
  const userData = useSelectUserData();
  const accessToken = useSelectToken();

  const hasAccess = useMemo(() => accessToken && userData, [accessToken, userData])

  return hasAccess
    ? <Navigate to={getPath(RoutePath.DASHBOARD, true)} replace />
    : <Outlet />
}