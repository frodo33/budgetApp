import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { AppProvider } from "./App.tsx";
import { router } from "./pages/@Router/router/router.tsx";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
