import "./App.css";
import {
  main,
  themeResetButton,
  themeToggleButton,
  themeToggleButtons,
  themeToggleSection,
  toolsLogoLinks,
} from "./App.css.ts";
import reactLogo from "./assets/react.svg";
import { useTheme } from "./hooks/useTheme";
import { darkTheme } from "./utils/css/theme/darkTheme.css.ts";
import { lightTheme } from "./utils/css/theme/lightTheme.css.ts";
import viteLogo from "/vite.svg";

export const App = () => {
  const { theme, setTheme } = useTheme();
  const appTheme = theme === "light" ? lightTheme : darkTheme;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  return (
    <div id="app" className={appTheme}>
      <main className={main}>
        <div className={toolsLogoLinks}>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div>
          <h1>UI Components</h1>
          <p>Built with React, Vite and TypeScript.</p>
        </div>
        <hr />
        <div className={themeToggleSection}>
          <p>{`System theme: ${systemTheme}`}</p>
          <p>{`Current theme: ${theme}`}</p>
          <div className={themeToggleButtons}>
            <button
              className={themeToggleButton}
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              Toggle theme
            </button>
            <button
              className={themeResetButton}
              onClick={() => {
                setTheme(systemTheme);
              }}
            >
              Reset theme
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
