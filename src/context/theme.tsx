import { useState } from "react";
import {
  ThemeProviderContext,
  type Theme,
  type ThemeProviderProps,
} from "../hooks/useTheme";

export const APP_THEME_LOCAL_STORAGE_KEY = "app-theme";

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
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return <ThemeProviderContext value={value}>{children}</ThemeProviderContext>;
};
