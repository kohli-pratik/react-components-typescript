import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { axe } from "vitest-axe";
import { App } from "./App";
import { ThemeProvider } from "./context/theme";

test("should not have accessibility violations", async () => {
  const { container } = render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
