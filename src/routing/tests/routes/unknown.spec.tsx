import { screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { userEvent } from "vitest/browser";
import { renderWithFileRoutes } from "../fileRouteUtils";

describe("Unknown Route", () => {
  test("should render the default page not found component", async () => {
    renderWithFileRoutes(<div />, { initialLocation: "/unknown" });

    await waitFor(() => {
      expect(screen.getByText("Page not found!")).toBeInTheDocument();
    });

    const goToHomeLink = screen.getByRole("link", { name: "Go to Home" });
    expect(goToHomeLink).toBeInTheDocument();

    await userEvent.click(goToHomeLink);
    await waitFor(() => {
      expect(screen.getByText("UI Components")).toBeInTheDocument();
    });
  });
});
