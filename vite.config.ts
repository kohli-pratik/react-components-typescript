/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3000,
    open: true,
  },
  base: "/react-components-typescript/",
  test: {
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["index.tsx", "src/**/*.stories.{ts,tsx}"],
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
          exclude: ["src/**/*.axe.spec.{ts,tsx}", "src/**/*.stories.{ts,tsx}"],
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
