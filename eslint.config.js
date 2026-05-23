import js from "@eslint/js";
import { importX } from "eslint-plugin-import-x";
import jsxA11yX from "eslint-plugin-jsx-a11y-x";
import reactDom from "eslint-plugin-react-dom";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import reactX from "eslint-plugin-react-x";
import { configs as storybookConfigs } from "eslint-plugin-storybook";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { configs as tsEslintConfig } from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", "coverage", "storybook-static"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      // Enable strict lint rules for TypeScript
      tsEslintConfig.strictTypeChecked,
      // Enable stylistic lint rules for TypeScript
      tsEslintConfig.stylisticTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
      // Enable lint rules for import/export syntax
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
    ],
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/consistent-type-definitions": "off",
    },
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        parser: "@typescript-eslint/parser",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...storybookConfigs["flat/recommended"],
  {
    // Enable lint rules for import/export syntax
    plugins: {
      "import-x": importX,
    },
    extends: ["import-x/flat/recommended", "import-x/flat/typescript"],
    rules: {
      "import-x/no-dynamic-require": "warn",
    },
  },
  {
    // Enable lint rules for a11y
    files: ["**/*.{ts,tsx}"],
    ...jsxA11yX.configs.recommended,
    languageOptions: {
      ...jsxA11yX.configs.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    // Custom lint rules for the project
    files: ["**/*.{ts,tsx}"],
    ignores: [
      "**/*.stories.{ts,tsx}",
      "**/*.config.{js,ts}",
      ".storybook/*.ts",
    ],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportDefaultDeclaration",
          message: "Prefer named exports over default exports.",
        },
      ],
    },
  },
]);
