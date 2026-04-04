import landing from "./index.html";
import { DEFAULT_PORT } from "./constants.ts";

const port = Number(process.env.PORT) || DEFAULT_PORT;

const server = Bun.serve({
  port,
  routes: {
    "/": landing,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`Listening on ${server.url}`);
