import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.axe.spec.{ts,tsx}"],
    setupFiles: ["./vitest.jsdom.setup.ts"],
    environment: "jsdom",
  },
});
