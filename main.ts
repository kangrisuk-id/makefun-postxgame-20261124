// STARFALL DODGE — make.fun Post-X entry program (Node 22, standard library only).
//
// The entry itself is a post on X: a short video of an AI agent building the
// game in game/starfall-dodge.html from a single prompt, ending with
// make.fun's referral end card. This program's whole job is to hand the post
// in: it copies POST.json from the repository root into the output
// directory, where the house reads the post's address and scores the post
// itself (views + 10 x likes, reposts, quotes and replies). Nothing this
// program writes about the post is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

if (!existsSync(source)) {
  console.error(`main.ts: no POST.json at ${source} - nothing to hand in.`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

// Verify the hand-in landed byte for byte: a truncated copy would hand in a
// post address the house cannot read, so fail loudly instead of silently.
const handed = readFileSync(target);
const original = readFileSync(source);
if (!handed.equals(original)) {
  console.error("main.ts: copied POST.json differs from the repository's - refusing to hand it in.");
  process.exit(1);
}

// The address must at least parse as the JSON object the gate expects.
try {
  const post = JSON.parse(handed.toString("utf8"));
  if (typeof post.url !== "string" || post.url.length === 0) throw new Error("missing url");
} catch {
  console.error("main.ts: POST.json is not a JSON object with a url string.");
  process.exit(1);
}
