import landing from "./index.html";
import { DEFAULT_PORT } from "./constants.ts";

function isAddrInUse(e: unknown): boolean {
  return (
    typeof e === "object" &&
    e !== null &&
    "code" in e &&
    (e as { code: string }).code === "EADDRINUSE"
  );
}

function start(port: number) {
  return Bun.serve({
    port,
    routes: {
      "/": landing,
    },
    development: {
      hmr: true,
      console: true,
    },
  });
}

const raw = process.env.PORT;
const portFromEnv = raw !== undefined && raw !== "";
const preferred = portFromEnv
  ? Math.trunc(Number(raw))
  : DEFAULT_PORT;

let server;
if (portFromEnv) {
  if (!Number.isFinite(preferred) || preferred <= 0) {
    throw new Error(`Invalid PORT: ${raw}`);
  }
  server = start(preferred);
} else {
  try {
    server = start(DEFAULT_PORT);
  } catch (e) {
    if (isAddrInUse(e)) {
      console.warn(
        `Port ${DEFAULT_PORT} is in use; binding to an available port (set PORT= to choose one).`,
      );
      server = start(0);
    } else {
      throw e;
    }
  }
}

console.log(`Listening on ${server.url}`);
