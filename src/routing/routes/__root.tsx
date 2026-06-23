import {
  createRootRoute,
  Outlet,
  type RootRouteOptions,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { App } from "../../App";
import { ThemeProvider } from "../../context/theme";
import { NavBar } from "../../features/navbar/NavBar";

/**
 * Using file-based routing, the Vite plugin injects code into files during compilation.
 * When compiling `createRootRoute({ ... })`, it generated an implicit object containing fallback components, default error boundary hooks, and structural layout sub-methods.
 * With the `__root.tsx` file containing an active `<Outlet />`, V8 mapped the execution of the layout but marks the trailing bracket }); as uncovered. This is because the root route's built-in error/not-found boundaries are never triggered during a successful test.
 * This resulted in a invalid coverage issue and so the standardization using a factory method function.
 * Passing the thoroughly typed identity factory function clarifies the source map boundaries for the V8 engine without altering your application logic.
 */

const rootRouteConfigFactory = (): RootRouteOptions => ({
  component: () => (
    <>
      <ThemeProvider>
        <App>
          <NavBar />
          <Outlet />
        </App>
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});

export const Route = createRootRoute(rootRouteConfigFactory());
