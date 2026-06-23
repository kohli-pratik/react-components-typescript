import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    tanstackRouter({
      routesDirectory: "./src/routing/routes",
      generatedRouteTree: "./src/routing/routeTree.gen.ts",
      disableLogging: true,
    }),
    vanillaExtractPlugin(),
  ],
  test: {
    include: ["src/**/*.spec.{tsx}"],
    exclude: ["src/**/*.axe.spec.{ts,tsx}", "src/**/*.stories.{ts,tsx}"],
    setupFiles: ["./vitest.browser.setup.ts"],
    browser: {
      provider: playwright(),
      enabled: true,
      instances: [{ browser: "chromium" }],
    },
  },
});
