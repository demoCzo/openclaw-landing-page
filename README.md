# democzo

Bun app that serves a **static replica** of the Claude marketing landing (hero, Cowork band, pricing, FAQ) via `Bun.serve` and HTML imports. For local demo only — not affiliated with Anthropic.

To install dependencies:

```bash
bun install
```

Dev server (hot reload):

```bash
bun run dev
```

Then open the URL printed in the terminal (default [http://localhost:3000](http://localhost:3000)).

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
