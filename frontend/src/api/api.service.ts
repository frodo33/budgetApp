import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "./api.base";

export const apiService = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "api",
  endpoints: () => ({}),
});