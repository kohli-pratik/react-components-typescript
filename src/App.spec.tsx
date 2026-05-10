import { beforeEach, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { App } from "./App";
import { APP_THEME_LOCAL_STORAGE_KEY, ThemeProvider } from "./context/theme";

beforeEach(() => {
  localStorage.removeItem(APP_THEME_LOCAL_STORAGE_KEY);
});

test("theme toggle button changes the theme which is stored in localStorage correctly", async () => {
  const screen = await render(<App />, { wrapper: ThemeProvider });

  await expect.element(screen.getByText("System theme: light")).toBeVisible();
  await expect.element(screen.getByText("Current theme: system")).toBeVisible();

  await screen.locator.getByRole("button", { name: "Toggle theme" }).click();
  await expect.element(screen.getByText("Current theme: light")).toBeVisible();
  expect(localStorage.getItem(APP_THEME_LOCAL_STORAGE_KEY)).toBe("light");

  await screen.locator.getByRole("button", { name: "Toggle theme" }).click();
  await expect.element(screen.getByText("Current theme: dark")).toBeVisible();
  expect(localStorage.getItem(APP_THEME_LOCAL_STORAGE_KEY)).toBe("dark");
});

test("reset theme button resets the theme to system theme", async () => {
  const screen = await render(<App />, { wrapper: ThemeProvider });

  await expect.element(screen.getByText("System theme: light")).toBeVisible();
  await expect.element(screen.getByText("Current theme: system")).toBeVisible();

  await screen.locator.getByRole("button", { name: "Toggle theme" }).click();
  await expect.element(screen.getByText("Current theme: light")).toBeVisible();

  await screen.locator.getByRole("button", { name: "Reset theme" }).click();
  await expect.element(screen.getByText("Current theme: light")).toBeVisible();
  expect(localStorage.getItem(APP_THEME_LOCAL_STORAGE_KEY)).toBe("light");
});

test("system theme is detected correctly", async () => {
  vi.spyOn(window, "matchMedia").mockImplementation((query: string) => {
    return {
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };
  });
  const screen = await render(<App />, { wrapper: ThemeProvider });

  await expect.element(screen.getByText("System theme: dark")).toBeVisible();
});
