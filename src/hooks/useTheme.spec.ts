import { waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import { renderHook } from "vitest-browser-react";
import { APP_THEME_LOCAL_STORAGE_KEY } from "../constants/constants";
import { ThemeProvider } from "../context/theme";
import { useTheme } from "./useTheme";

test("useTheme throws an error when used outside of ThemeProvider", async () => {
  await renderHook(() => useTheme()).catch((error: unknown) => {
    expect(error).toStrictEqual(
      Error("useTheme must be used within a ThemeProvider")
    );
  });
});

test("useTheme allows switching between light and dark theme modes", async () => {
  localStorage.removeItem(APP_THEME_LOCAL_STORAGE_KEY);
  const { result } = await renderHook(() => useTheme(), {
    wrapper: ThemeProvider,
  });

  const { current } = result;
  const { setTheme } = current;

  expect(result.current.theme).toBe("system");

  setTheme("dark");
  await waitFor(() => {
    expect(result.current.theme).toBe("dark");
  });

  setTheme("light");
  await waitFor(() => {
    expect(result.current.theme).toBe("light");
  });
});
