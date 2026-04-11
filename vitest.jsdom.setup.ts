import { expect } from "vitest";
import "vitest-axe/extend-expect";
import * as axeMatchers from "vitest-axe/matchers";

// Extend Vitest's expect with axe matchers
expect.extend(axeMatchers);
