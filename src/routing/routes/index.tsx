import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../../pages/home/Home";

/**
 * The route file importing `createFileRoute` and immediately calling it as a function chain was resulting in Vite's underlying transpiler (esbuild) to create an optional evaluation check.
 * Vitest reads this transpiled chunk during compilation and expects an alternative pathway (an else branch) that never logically executes.
 * This resulted in a ghost branch which lead to a `else path not taken` coverage issue that was invalid.
 * The implicit fallback is eliminated by saving the returned factory function to an intermediate variable before passing the configuration options.
 */
const routeFactory = createFileRoute("/");

export const Route = routeFactory({
  component: RouteComponent,
});

function RouteComponent() {
  return <Home />;
}
