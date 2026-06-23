import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { axe } from "vitest-axe";
import { ThemeProvider } from "../../context/theme";
import { Home } from "./Home";

test("should not have accessibility violations", async () => {
  const { container } = render(
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
