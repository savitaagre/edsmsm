# WKND home — same-design migration plan & tracker

Source: https://wknd.site/us/en.html
Flow: replica (same design, near pixel-perfect) — stardust `replica` skill
Branch: `feat/wknd-home-replica` (from `main`)
Started: 2026-10-16

Scope: single page (bounded `--single` entry — the user asked to migrate one URL).
Gate widths: 1440, 360 (skill defaults). No `--target-breakpoints`, no `--register`.

## Phases

| # | Phase | Status | Notes |
|---|---|---|---|
| 0 | Setup (branch, hygiene, deps, script copies) | done | see log |
| 1 | Extract (`--single --dynamics`) | done | 1/1 live; full Phases 3–6 → verbatim branch |
| 2 | Preserve direction (verbatim promotion), register, dynamics triage | done | register empty; D1–D3 owner decisions open (interim static) |
| 3 | Recreate home archetype prototype | done | `stardust/prototypes/us-en-html-proposed.html` |
| 4 | Source-fidelity gate 1440 + 360, cap-probe, motion parity, approval | done | 1440 0.20%/Δ0 · 360 2.08%/Δ−1 · 0 red · cap PASS · motion 10/10 · approved (hands-off) |
| 5 | Handoff: deploy to EDS blocks + content, published-origin gate, PR | pending | |

## Log

- 2026-10-16 Setup: branch created; `.gitignore` stardust block (`.env`, `.env.*`) added;
  `.hlxignore` gets `stardust/`; `stardust/state.json` not ignored (check passed).
  Scripts copied to `stardust/scripts/{replica,stardust,migrate,diff}`. Gate deps
  (playwright, pixelmatch, pngjs, cheerio) are not in the project; per the EMA rule they
  are NOT npm-installed — the plugin-root `node_modules` is byte-copied to
  `stardust/scripts/node_modules/` (gitignored) so the copies resolve.
