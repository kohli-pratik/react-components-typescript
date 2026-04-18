import type { Configuration } from "lint-staged";

export default {
  "./**/*.{js,jsx,ts,tsx}": () => [
    "npm run lint:fix",
    "npm run format",
    "npm run build-storybook",
    "npm run test:axe",
    "npm run test:coverage",
  ],
  "./**/*.(json|css|md)": () => ["npm run format"],
} satisfies Configuration;
