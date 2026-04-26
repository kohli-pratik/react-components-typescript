import "./App.css";
import reactLogo from "./assets/react.svg";
import { useTheme } from "./hooks/useTheme";
import viteLogo from "/vite.svg";

export const App = () => {
  const { theme, setTheme } = useTheme();

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  return (
    <main id="app">
      <div id="tools-logo-links">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>UI Components</h1>
      <p>Built with React, Vite and TypeScript.</p>
      <div id="divider" />
      <div id="theme-toggle-section">
        <p>{`System theme: ${systemTheme}`}</p>
        <p>{`Current theme: ${theme}`}</p>
        <div id="theme-toggle-buttons">
          <button
            id="theme-toggle-button"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            Toggle theme
          </button>
          <button
            id="theme-reset-button"
            onClick={() => {
              setTheme(systemTheme);
            }}
          >
            Reset theme
          </button>
        </div>
      </div>
    </main>
  );
};
