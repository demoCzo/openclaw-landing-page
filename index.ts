export { SITE_NAME, DEFAULT_PORT } from "./constants.ts";

if (import.meta.main) {
  await import("./server.ts");
}
