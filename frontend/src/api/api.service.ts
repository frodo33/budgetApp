import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./api.base";

export const apiService = createApi({
  baseQuery,
  reducerPath: "api",
  endpoints: () => ({}),
});