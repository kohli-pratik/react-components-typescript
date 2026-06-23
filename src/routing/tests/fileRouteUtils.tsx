import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render, type RenderOptions } from "@testing-library/react";

// Import the generated route tree
import type { ReactElement } from "react";
import { routerOptions } from "../router";

// Create test router with generated route tree
export function createTestRouterFromFiles(
  initialLocation = "/",
  routerContext = {}
) {
  const router = createRouter({
    ...routerOptions,
    history: createMemoryHistory({
      initialEntries: [initialLocation],
    }),
    context: {
      // Add any required context for the routes
      ...routerContext,
    },
  });

  return router;
}

// Custom render function for file-based routes
interface RenderWithFileRoutesOptions extends Omit<RenderOptions, "wrapper"> {
  initialLocation?: string;
  routerContext?: Record<string, unknown>;
}

export function renderWithFileRoutes(
  ui: ReactElement,
  {
    initialLocation = "/",
    routerContext = {},
    ...renderOptions
  }: RenderWithFileRoutesOptions = {}
) {
  const router = createTestRouterFromFiles(initialLocation, routerContext);

  function Wrapper() {
    return <RouterProvider router={router} />;
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    router,
  };
}

// Helper to test specific file rout
// Ignore coverage as it's not yet used
/* v8 ignore next */
export function createMockFileRoute(
  path: string,
  component: React.ComponentType
) {
  // This is useful for isolated testing when you don't want to use the full route tree
  return {
    path,
    component,
    // Add other common route properties as needed
  };
}
