import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  test: {
    include: ["src/**/*.axe.spec.{ts,tsx}", "src/**/*.spec.{ts}"],
    setupFiles: ["./vitest.jsdom.setup.ts"],
    typecheck: { enabled: true },
    environment: "jsdom",
    watch: false,
    globals: true,
  },
});
