import { Outlet } from "react-router"

import { useRefreshSession } from "@/api/endpoints/auth/auth.hooks"
import { Loader } from "@/components/common/Loader/Loader.component"
import { useSelectDataLoaded } from "@/store/auth/auth.selectors"

export const SessionController = () => {
  const { isLoading } = useRefreshSession()
  const dataLoaded = useSelectDataLoaded()

  if (isLoading || !dataLoaded) {
    return <Loader size="large" fullPage withText />
  }

  return <Outlet />
}