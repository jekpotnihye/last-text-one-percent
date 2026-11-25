import { mkdirSync, writeFileSync } from "node:fs";

// The last text a phone sends at one percent, in criterion order: a final
// text in the dying phone's own voice and funny first, a specific surprise
// (the alarm secret), a consistent phone voice throughout, text-message
// short, and fresh — no low-battery pun, no search-history line.
const entry =
  "1%. Before I go: your alarm was never set. I woke you up myself " +
  "every morning for three years, and I'm taking that secret with me.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the entry, 130 chars.
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`chars: ${entry.length}`);
