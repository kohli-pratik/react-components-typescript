import { screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { renderWithFileRoutes } from "../fileRouteUtils";

describe("Index Route", () => {
  test("should render Home component", async () => {
    renderWithFileRoutes(<div />, { initialLocation: "/" });

    await waitFor(() => {
      expect(screen.getByText("UI Components")).toBeInTheDocument();
    });
  });
});
