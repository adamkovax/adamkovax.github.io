import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContentProvider } from "@/content";
import { App } from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContentProvider>
      <App />
    </ContentProvider>
  </StrictMode>,
);
