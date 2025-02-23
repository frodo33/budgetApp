import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { AuthState } from "./auth.types.ts";

const initialState: AuthState = {
  accessToken: null,
  userData: {
    id: null,
    username: "",
    email: "",
  },
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<AuthState["userData"]>) => {
      state.userData = { ...payload }
    },
    setAccessToken: (state, { payload }: PayloadAction<AuthState["accessToken"]>) => {
      state.accessToken = payload
    },
    clearSession: () => {
      localStorage.removeItem("token");
      return ({ ...initialState })
    },
  },
})
const { actions, reducer } = authSlice

export const {
  setUserData,
  setAccessToken,
  clearSession,
} = actions;

export default reducer;