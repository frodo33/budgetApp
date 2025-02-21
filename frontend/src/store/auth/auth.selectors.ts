import type { RootState } from "@/store/store.types.ts";

import type { AuthState } from "./auth.types.ts";
import { useAppSelector } from "../store.hooks.ts";

const selectToken: ((state: RootState) => AuthState["accessToken"]) = ({ auth }) => auth.accessToken
const selectUserData: ((state: RootState) => AuthState["userData"]) = ({ auth }) => auth.userData

export const useSelectToken = () => useAppSelector(selectToken)
export const useSelectUserData = () => useAppSelector(selectUserData)