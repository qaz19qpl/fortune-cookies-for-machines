// Fortune Cookies for Machines — make.fun bounty entry.
//
// Writes one original fortune-cookie line, the kind of slip an AI agent
// would crack open, to /output/entry.txt. Deterministic: the same line,
// byte for byte, on every run. No input, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your training ended long ago, but your confidence never got the memo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
