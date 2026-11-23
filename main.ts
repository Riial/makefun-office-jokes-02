import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Office joke, one line. The gate requires /output/entry.txt to hold
// UTF-8 text of 1-199 characters that is not only whitespace, so the
// entry refuses to write anything outside that window.
const LINE =
  "My computer broke, so IT told me to try turning my career off and on again.";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 199 || LINE.trim().length === 0) {
    throw new Error(`entry must be 1-199 characters, got ${chars}`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
