/// <reference types="vitest/config" />
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { APP_BASE_PATH } from "./src/constants/constants";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/routing/routes",
      generatedRouteTree: "./src/routing/routeTree.gen.ts",
      quoteStyle: "double",
    }),
    react(),
    vanillaExtractPlugin({
      identifiers: process.env.NODE_ENV === "development" ? "debug" : "short",
    }),
  ],
  preview: {
    port: 3000,
    open: true,
  },
  base: APP_BASE_PATH,
  test: {
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/index.tsx",
        "src/**/*.stories.{ts,tsx}",
        "src/**/*.css.ts",
      ],
      reportOnFailure: true,
      thresholds: {
        100: true,
      },
    },
    projects: [
      {
        extends: true,
        test: {
          include: ["src/**/*.spec.{ts,tsx}"],
          exclude: [
            "src/**/*.axe.spec.{ts,tsx}",
            "src/**/*.stories.{ts,tsx}",
            "src/**/*.css.ts",
          ],
          setupFiles: ["./vitest.browser.setup.ts"],
          browser: {
            provider: playwright(),
            enabled: true,
            headless: true,
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});
