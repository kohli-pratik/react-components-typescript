/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3000,
    open: true,
  },
  base: "/react-components-typescript/",
  test: {
    setupFiles: ["./setupTests.ts"],
    browser: {
      provider: playwright(),
      enabled: true,
      headless: true,
      instances: [{ browser: "chromium" }],
    },
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["main.tsx"],
      reportOnFailure: true,
      thresholds: {
        100: true,
      },
    },
  },
});
