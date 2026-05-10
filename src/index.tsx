import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThemeProvider } from "./context/theme";
import "./utils/css/reset.css";

let rootElement = document.getElementById("root");
if (!rootElement) {
  rootElement = document.createElement("div");
  rootElement.id = "root";
  document.body.appendChild(rootElement);
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
