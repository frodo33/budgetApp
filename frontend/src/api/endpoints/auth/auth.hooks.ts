import { useEffect } from "react";

import { setDataLoaded } from "@/store/auth/auth.slice";
import { useAppDispatch } from "@/store/store.hooks";

import { useRefreshTokenMutation } from "./auth.api";

export const useRefreshSession = () => {
  const dispatch = useAppDispatch()
  const [refreshToken, { isLoading }] = useRefreshTokenMutation()

  useEffect(() => {
    const getSession = async () => {
      try {
        await refreshToken().unwrap()
      } catch {
        dispatch(setDataLoaded())
      }
    }

    void getSession()
  }, [dispatch, refreshToken])

  return { isLoading }
}