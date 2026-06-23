import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import { useTheme } from "../../hooks/useTheme.ts";
import {
  themeResetButton,
  themeToggleButton,
  themeToggleButtons,
  themeToggleSection,
  toolsLogoLinks,
} from "./Home.css.ts";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const Home = () => {
  const { theme, setTheme } = useTheme();
  const systemTheme = getSystemTheme();

  return (
    <main>
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
  );
};
