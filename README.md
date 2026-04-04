# democzo

Bun app that serves a **static replica** of a Claude-style marketing landing branded **OpenClaw** (hero, Cowork band, pricing, FAQ) via `Bun.serve` and HTML imports. For local demo only — not affiliated with Anthropic.

To install dependencies:

```bash
bun install
```

Dev server (hot reload):

```bash
bun run dev
```

Then open the URL printed in the terminal (default [http://localhost:3000](http://localhost:3000)). If 3000 is already taken and `PORT` is unset, the server picks another free port automatically. To force a port: `PORT=3001 bun run dev`.

Production-style run:

```bash
bun run start
```

Bundle server entry to `dist/`:

```bash
bun run build
```

Tests:

```bash
bun test
```

Stack: [Bun](https://bun.sh) runtime, package manager, test runner, and bundler.
