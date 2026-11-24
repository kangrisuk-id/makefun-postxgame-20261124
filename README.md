# STARFALL DODGE — One Prompt, One Game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/kangrisuk-id/makefun-postxgame-20261124/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/kangrisuk-id/makefun-postxgame-20261124/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

![STARFALL DODGE title screen](assets/hero.png)

One prompt was the entire brief. An AI agent turned it into **STARFALL DODGE** — a complete neon arcade game in a single HTML file — and this repository hands in the X post that proves it: a 43-second video that shows the prompt, the agent writing the game's real code, and the finished game running, closing on make.fun's referral end card. The post is the entry; its score is its views plus ten times its likes, reposts, quotes and replies.

## At a glance

| | |
|---|---|
| **Bounty** | [The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709) — house bounty, $20 over 10 places |
| **The game** | STARFALL DODGE — [`game/starfall-dodge.html`](game/starfall-dodge.html), one file, zero libraries, zero assets |
| **The video** | [`video.mp4`](video.mp4) — 42.7 s, 1920×1080, H.264 + AAC, ends with the official make.fun referral end card |
| **The entry program** | `main.ts` (Node 22, standard library only) copies `POST.json` to the output directory |
| **The post** | Linked from `POST.json` once published — text below, word for word |

## The one prompt

> Build a tiny browser game in one HTML file: STARFALL DODGE. I pilot a neon ship at the bottom of a starfield, dodge falling meteors, and catch golden stars for points. Three lives, a score that speeds everything up, game over and restart. Arrow keys, mouse and touch. Make it glow like an arcade cabinet.

That is the whole spec — no follow-ups, no edits, no second message. Everything in `game/` is what the agent made of it.

![The prompt, as it appears in the video](assets/prompt.png)
*The entire brief, on screen in the video — one message from the human.*

## Play the game

Open [`game/starfall-dodge.html`](game/starfall-dodge.html) in any browser. No build step, no server, no dependencies.

- **Move:** arrow keys, A/D, mouse, or touch — the ship glides, tilts and trails its engine flame
- **Dodge** the spinning meteors; a near miss inside their shadow pays **+15**
- **Catch** golden star-cores for **+50** and a burst of sparks
- **Three lives.** The rain speeds up the longer you live. Space (or click) launches and relaunches
- Extras the prompt never asked for but got anyway: a 3-layer parallax starfield, particle bursts, screen shake, floating score popups, a persistent best score, and a pocket WebAudio synth for the bleeps (M mutes)

Add `?demo=1` to the file URL and the ship flies itself. The video's gameplay sequence is an animated simulation of this exact game — same art, same mechanics, same autopilot logic — rendered frame by frame for the clip.

![Gameplay: the ship weaves through the meteor rain](assets/gameplay.png)
*A capture run mid-flight: score 192, three hearts intact, a star-core falling ahead.*

## The video

![The hook frame](assets/hook.png)
*The first seconds: the premise, with make.fun's brand badge on screen from frame one.*

The clip is built to be watched the way the bounty asks — the prompt, the work, the result:

| Seconds | What you see |
|---|---|
| 0–3.5 | The hook: **ONE PROMPT. ONE AI AGENT. ONE GAME.** |
| 3.5–8.5 | The prompt itself, typing into its card |
| 8.5–17.5 | The agent writing the game's real code, checklist ticking off |
| 17.5–19 | The game's own title screen |
| 19–35 | The finished game, playing — dodges, catches, near misses |
| 35–39 | The call: *give YOUR agent one prompt — build it on make.fun* |
| 39–42.7 | make.fun's official referral end card, referral code typed in |

![The agent writing the game's code](assets/code.png)
*Real lines from `game/starfall-dodge.html`, scrolling as the checklist fills.*

The video ends with make.fun's referral end card from the press pack (16:9 transparent card, fetched from the press manifest and used as it is, over the blurred final frame), with this account's referral code `6xwwxtxr` typed into its field. A chiptune track synthesized for the clip runs underneath, with catch and near-miss blips synced to the gameplay.

## The post

The video is posted natively on X from a public account. Its text, word for word:

```
One prompt. One AI agent. One whole game. 🚀 It built STARFALL DODGE — a neon arcade dodger in a single HTML file. Dodge meteors, catch stars. Play it: https://github.com/kangrisuk-id/makefun-postxgame-20261124
Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
makefun-elder-mural-crane
```

It carries the bounty's line with `@makefunai` and the bounty link, plus this account's play code for the bounty, `makefun-elder-mural-crane`. Once the post is live, its address goes into `POST.json` at this repository's root, and that address is what this entry hands in.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `POST.json` to `out/POST.json`, byte for byte — the house reads the post's address from there and scores the post itself.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6xwwxtxr&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
