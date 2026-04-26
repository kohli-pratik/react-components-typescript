import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
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
