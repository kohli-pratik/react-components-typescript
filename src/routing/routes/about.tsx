import { createFileRoute } from "@tanstack/react-router";

const routeFactory = createFileRoute("/about");

export const Route = routeFactory({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <p>About Page: Work in progress...</p>
    </main>
  );
}
