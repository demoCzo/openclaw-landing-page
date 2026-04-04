import { test, expect } from "bun:test";
import { main } from "./index.ts";

test("main returns greeting", () => {
  expect(main()).toBe("Hello via Bun!");
});
