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
| 5 | Handoff: deploy to EDS blocks + content, published-origin gate, PR | done (PR pending) | preview `/us/en`: 1440 0.25%/Δ0 · 360 1.73%/Δ−1 · 0 red · gate-all PASS ×2 · motion 10/10 |

## Log

- 2026-10-16 Setup: branch created; `.gitignore` stardust block (`.env`, `.env.*`) added;
  `.hlxignore` gets `stardust/`; `stardust/state.json` not ignored (check passed).
  Scripts copied to `stardust/scripts/{replica,stardust,migrate,diff}`. Gate deps
  (playwright, pixelmatch, pngjs, cheerio) are not in the project; per the EMA rule they
  are NOT npm-installed — the plugin-root `node_modules` is byte-copied to
  `stardust/scripts/node_modules/` (gitignored) so the copies resolve.

- 2026-10-16 Phases 1–4: see journal.md. Prototype gate 1440 0.20 % / 360 2.08 %, motion 10/10, approved (hands-off).
- 2026-10-16 Phase 5: baseline of the existing implementation 50.91 % → foundation rebuilt (C0, subagent),
  4 blocks + /us/en (C-archetype, subagent), 5 foundation requests applied at C-final (main) → 0 structural red.
  Preview: https://feat-wknd-home-replica--edsmsm--savitaagre.aem.page/us/en (never published live).

## Open items for the owner

- D1 Sign In backend · D2 analytics tags (Adobe Launch) · D3 locale trees — `stardust/dynamic-features.md`.
- Publish decision (preview only so far).
- The new foundation (scaffold spacing, header, footer) also applies to the 16 adventure + 5 magazine DA
  documents once they are previewed on this code — re-gate them before publishing.
- Internal links on /us/en point at pages not yet previewed on this branch (scope debt).
