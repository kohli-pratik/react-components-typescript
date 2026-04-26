import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThemeProvider } from "./context/theme";
import "./index.css";
import "./utils/css/reset.css";
import "./utils/css/variables.css";

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
