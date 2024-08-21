import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/index.tsx";
import { RouterProvider } from "react-router-dom";
import ActiveSectionContextProvider from "./context/ActiveSectionContextProvider.tsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ActiveSectionContextProvider>
        <RouterProvider router={router} />
      </ActiveSectionContextProvider>
    </HelmetProvider>
  </StrictMode>
);
