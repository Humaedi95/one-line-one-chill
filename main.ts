// One Line, One Chill — writes a single horror sentence to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My daughter whispered, 'Daddy, the man in my closet sounds just like you' — and I was home alone.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
  }
  if (!LINE.trim()) {
    throw new Error("Line must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("Line must be a single line");
  }
  // One sentence, one breath: exactly one terminal full stop.
  const stops = (LINE.match(/\./g) ?? []).length;
  if (stops !== 1) {
    throw new Error(`Line must be a single sentence, found ${stops} full stops`);
  }
  const out = "/output/entry.txt";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, LINE + "\n", "utf8");
  console.log(`Wrote ${LINE.length} characters to ${out}`);
}

main();
