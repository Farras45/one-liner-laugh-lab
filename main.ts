// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Node 22 stdlib only. Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). No trailing newline: the gate counts characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I was only following my job description: eat dirt. Nobody said socks don't count.";

// Gate self-check: the entry must be UTF-8 text of 1 to 200 characters,
// not only white space — refuse to write anything that would fail it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars) to ${outDir}`);
