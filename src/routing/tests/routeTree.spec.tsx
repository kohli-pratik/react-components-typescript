import { describe, expect, test } from "vitest";
import { routeTree } from "../routeTree.gen";
import { router } from "../router";

describe("Generated Route Tree", () => {
  test("should generate route tree from file structure", () => {
    expect(routeTree).toBeDefined();
    expect(routeTree.children).toBeDefined();
  });

  test("should include all expected routes", () => {
    // Get all route paths from the generated tree
    const getAllRoutePaths = (
      tree: typeof routeTree,
      paths: string[] = []
    ): string[] => {
      if (tree.children && Array.isArray(tree.children)) {
        tree.children.forEach((child: typeof routeTree) => {
          getAllRoutePaths(child, paths);
        });
      } else {
        paths.push(tree.path);
      }
      return paths;
    };

    const routePaths = getAllRoutePaths(routeTree);

    // Test that expected routes are present
    expect(routePaths).toContain("/");
    expect(routePaths).toContain("about");
  });

  test("should have correct route hierarchy", () => {
    // Test parent-child relationships
    const routes = router.routesByPath;

    const homeRoute = routes["/"];
    expect(homeRoute).toBeDefined();

    const homeParent = homeRoute.options.getParentRoute();
    expect(homeParent).toBeDefined();
    expect(homeParent.isRoot).toBe(true);
    expect(homeParent.path).toBe("/");

    const aboutRoute = routes["/about"];
    expect(aboutRoute).toBeDefined();

    const aboutParent = aboutRoute.options.getParentRoute();
    expect(aboutParent).toBeDefined();
    expect(aboutParent.isRoot).toBe(true);
    expect(aboutParent.path).toBe("/");

    // Test for specific route structure based on the file organization
    // For example, if we have /posts/$postId routes:
    // const postsRoute = routes["/posts"];
    // expect(postsRoute).toBeDefined();
    // const postDetailRoute = routes["/posts/$postId"];
    // expect(postDetailRoute).toBeDefined();
    // const postDetailRouteParent = postDetailRoute.options.getParentRoute()
    // expect(postDetailRouteParent).toBeDefined();
    // expect(postDetailRouteParent.isRoot).toBe(true);
    // expect(postDetailRouteParent.path).toBe("/posts");
  });
});
