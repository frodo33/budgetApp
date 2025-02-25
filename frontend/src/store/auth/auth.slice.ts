import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { AuthState } from "./auth.types.ts";

const initialState: (dataLoaded?: boolean) => AuthState = (dataLoaded = false) => ({
  dataLoaded,
  accessToken: null,
  userData: {
    id: null,
    username: "",
    email: "",
  },
})

const authSlice = createSlice({
  name: "auth",
  initialState: initialState(),
  reducers: {
    setUserData: (state, { payload }: PayloadAction<AuthState["userData"]>) => {
      state.userData = { ...payload }
      state.dataLoaded = true
    },
    setAccessToken: (state, { payload }: PayloadAction<AuthState["accessToken"]>) => {
      state.accessToken = payload
    },
    setDataLoaded: (state) => {
      state.dataLoaded = true;
    },
    clearSession: () => {
      localStorage.removeItem("token");
      return ({ ...initialState(true) })
    },
  },
})
const { actions, reducer } = authSlice

export const {
  setUserData,
  setAccessToken,
  setDataLoaded,
  clearSession,
} = actions;

export default reducer;