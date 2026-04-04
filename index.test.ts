import { test, expect } from "bun:test";
import { SITE_NAME, DEFAULT_PORT } from "./index.ts";

test("site constants", () => {
  expect(DEFAULT_PORT).toBe(3000);
  expect(SITE_NAME).toContain("OpenClaw");
});
