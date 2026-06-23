import { useState } from "react";
import { APP_THEME_LOCAL_STORAGE_KEY } from "../constants/constants";
import {
  ThemeProviderContext,
  type Theme,
  type ThemeProviderProps,
} from "../hooks/useTheme";
import { darkTheme } from "../utils/css/theme/darkTheme.css";
import { lightTheme } from "../utils/css/theme/lightTheme.css";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getThemeClassName = ({ theme }: { theme: Theme }) => {
  if (theme === "system") {
    theme = getSystemTheme();
  }

  return theme === "light" ? lightTheme : darkTheme;
};

export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = APP_THEME_LOCAL_STORAGE_KEY,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    return storedTheme ?? defaultTheme;
  });

  const value = {
    theme,
    themeClassName: getThemeClassName({ theme }),
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return <ThemeProviderContext value={value}>{children}</ThemeProviderContext>;
};
