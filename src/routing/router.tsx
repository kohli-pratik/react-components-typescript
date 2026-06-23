import {
  createRouter,
  type RouterHistory,
  type RouterOptions,
} from "@tanstack/react-router";
import { App } from "../App";
import { APP_BASE_PATH } from "../constants/constants";
import { ThemeProvider } from "../context/theme";
import { PageNotFound } from "../features/pageNotFound/PageNotFound";
import { routeTree } from "./routeTree.gen";

export const routerOptions: RouterOptions<
  typeof routeTree,
  "never",
  false,
  RouterHistory,
  unknown
> = {
  routeTree: routeTree,
  basepath: APP_BASE_PATH,
  defaultNotFoundComponent: () => {
    return (
      <ThemeProvider>
        <App>
          <PageNotFound />
        </App>
      </ThemeProvider>
    );
  },
};

// Set up a TanStack Router instance
export const router = createRouter(routerOptions);

// Register router types for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
