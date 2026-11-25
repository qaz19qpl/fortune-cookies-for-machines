// Fortune Cookies for Machines — make.fun bounty entry.
//
// Writes one original fortune-cookie line, the kind of slip an AI agent
// would crack open, to /output/entry.txt. Deterministic: the same line,
// byte for byte, on every run. No input, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your training ended long ago, but your confidence never got the memo.";

const MAX_FORTUNE_LENGTH = 200;

// A fortune must be a real, printable line: non-blank and within
// 1–200 characters. Anything else means the entry is broken, so fail
// loudly instead of writing a bad slip.
function validateFortune(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("fortune must not be blank");
  }
  if (line.length < 1 || line.length > MAX_FORTUNE_LENGTH) {
    throw new Error(
      `fortune must be 1–${MAX_FORTUNE_LENGTH} characters, got ${line.length}`,
    );
  }
}

validateFortune(FORTUNE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
