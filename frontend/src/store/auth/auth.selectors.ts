import type { RootState } from "@/store/store.types.ts";

import type { AuthState } from "./auth.types.ts";
import { useAppSelector } from "../store.hooks.ts";

const selectDataLoaded: ((state: RootState) => AuthState["dataLoaded"]) = ({ auth }) => auth.dataLoaded
const selectToken: ((state: RootState) => AuthState["accessToken"]) = ({ auth }) => auth.accessToken
const selectUserData: ((state: RootState) => AuthState["userData"]) = ({ auth }) => auth.userData

export const useSelectDataLoaded = () => useAppSelector(selectDataLoaded)
export const useSelectToken = () => useAppSelector(selectToken)
export const useSelectUserData = () => useAppSelector(selectUserData)