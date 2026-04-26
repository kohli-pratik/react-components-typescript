import { expect, test } from "vitest";
import { renderHook } from "vitest-browser-react";
import { useTheme } from "./useTheme";

test("useTheme throws an error when used outside of ThemeProvider", async () => {
  await renderHook(() => useTheme()).catch((error: unknown) => {
    expect(error).toStrictEqual(
      Error("useTheme must be used within a ThemeProvider")
    );
  });
});
