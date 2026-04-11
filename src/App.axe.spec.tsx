import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { axe } from "vitest-axe";
import App from "./App";

test("should not have accessibility violations", async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
