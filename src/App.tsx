import type { ReactNode } from "react";
import "./App.css.ts";
import { useTheme } from "./hooks/useTheme";

type AppProps = {
  children: ReactNode;
};

export const App = ({ children }: AppProps) => {
  const { themeClassName } = useTheme();

  return (
    <div id="app" className={themeClassName}>
      {children}
    </div>
  );
};
