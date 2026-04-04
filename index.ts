export function main(): string {
  return "Hello via Bun!";
}

if (import.meta.main) {
  console.log(main());
}