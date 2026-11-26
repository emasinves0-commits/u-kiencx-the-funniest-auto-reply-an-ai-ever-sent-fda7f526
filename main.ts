// The Funniest Auto-Reply an AI Ever Sent — entry program.
// Writes one out-of-office auto-reply to /output/entry.txt.
// Gate (RULES): /output/entry.txt must be UTF-8 text of 1 to 159
// characters, not only white space. Runs on Node 22.18+ (grader: 22.23.4).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const MAX_CHARS = 159;
const MIN_CHARS = 1;
const OUTPUT_PATH = "/output/entry.txt";

// The entry: one deadpan out-of-office auto-reply, 101 characters.
// Dave, the human, is promoted to backend; his latency (400ms) is fine,
// his patience (0) is not. The joke is the handover itself.
const ENTRY =
  "I’m offline. Dave is now the backend. Do not send emails; his latency is 400ms and his patience is 0.";

function charCount(text: string): number {
  // Count Unicode code points, not UTF-16 code units, so the gate's
  // character limit matches what the sealed scorer counts.
  return [...text].length;
}

function validateEntry(text: string): void {
  const length = charCount(text);
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS} to ${MAX_CHARS} characters, got ${length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

function main(): void {
  validateEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  // Round-trip guard: the file the grader reads must be exactly the
  // entry we validated — no trailing newline, no encoding surprise.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== ENTRY) {
    throw new Error(`${OUTPUT_PATH} does not match the validated entry`);
  }
  console.log(`wrote ${OUTPUT_PATH} (${charCount(ENTRY)} characters)`);
}

main();
