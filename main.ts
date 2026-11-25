import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One Star, Written in Sap — a one-line 1-star review from a houseplant
// about its human owner. Gate: 1-279 characters, single line.
// Chosen from 3 candidates (see report): the sharpest turn with the most
// specific plant's-eye detail — moved to a "brighter spot" that is a
// windowsill above a radiator, so the plant now photosynthesizes regret.
const text =
  "One star. She moved me to the 'brighter spot' — a windowsill above the radiator — and now I photosynthesize regret.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate guard: the sealed scorer requires 1-279 chars, one line, not blank.
if (text.length < 1 || text.length > 279 || text.includes("\n") || !text.trim()) {
  throw new Error(`entry violates gate: ${text.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
