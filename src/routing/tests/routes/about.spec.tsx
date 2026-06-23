import { screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { renderWithFileRoutes } from "../fileRouteUtils";

describe("About Route", () => {
  test("should render About component", async () => {
    renderWithFileRoutes(<div />, { initialLocation: "/about" });

    await waitFor(() => {
      expect(
        screen.getByText("About Page: Work in progress...")
      ).toBeInTheDocument();
    });
  });
});
