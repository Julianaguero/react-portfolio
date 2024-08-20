import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/index.tsx";
import { RouterProvider } from "react-router-dom";
import ActiveSectionContextProvider from "./context/ActiveSectionContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ActiveSectionContextProvider>
      <RouterProvider router={router} />
    </ActiveSectionContextProvider>
  </StrictMode>
);
