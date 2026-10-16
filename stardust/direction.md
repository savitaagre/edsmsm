---
_provenance:
  writtenBy: stardust:replica
  writtenAt: 2026-10-16T12:33:06Z
  againstInput: https://wknd.site/us/en.html
  readArtifacts:
    - stardust/current/PRODUCT.md
    - stardust/current/DESIGN.md
    - stardust/current/DESIGN.json
---

# Direction — preserve mode (same-design migration)

Mode: PRESERVE. The target spec is the captured current state of https://wknd.site/us/en.html,
promoted verbatim (no direct invocation, no creative decisions).

Promoted: current/PRODUCT.md → PRODUCT.md · current/DESIGN.md → DESIGN.md ·
current/DESIGN.json → DESIGN.json (at 2026-10-16T12:33:06Z).

Provenance: full-prep branch (verbatim). The extract ran as a bounded `--single` entry but completed
its descriptive synthesis (Phases 3–6), so `stardust/current/PRODUCT.md` exists and § 1a bounded
synthesis does not apply (never mix the branches).

Permitted deltas: ONLY the entries of stardust/replica/inconsistency-register.md
(1 entry: R-01, the delivery-required h1 — see the register).

Fidelity: ia verbatim · design verbatim · content verbatim.

## Named deviations

- **Asset harvest (extract Phase 2 media/font capture).** crawl.mjs saved no media, fonts or logo.
  Replaced by a browser-UA `curl` harvest of the URLs in the rendered DOM and the live site's Google
  Fonts stylesheet (latin subsets) → `stardust/current/assets/{media,fonts}`, index at
  `stardust/current/assets/media/_index.tsv`; source stylesheets → `stardust/replica/capture/css/`.
  Why: the shipped crawler does not implement capture-list items 11/16 for saving. No pipeline step
  is replaced beyond that download.
- **Dependency resolution for project script copies.** Plugin-root `node_modules` byte-copied to
  `stardust/scripts/node_modules/` (gitignored) instead of an npm install (EMA rule) or a symlink
  (sandbox-blocked). No instrument behaviour changes.
- **Two one-off interaction probes** (`stardust/scripts/_probes/hover-decoration.mjs`, `open-rect.mjs`).
  Replace nothing; they cover two blind spots of the shipped instruments during interaction parity:
  motion-observe's hover diff does not sample `text-decoration` (footer nav underline), and no shipped
  instrument reads the geometry of an overlay revealed by a click (language menu `left`). Each was run
  on live and on the prototype; results are recorded in `stardust/replica/progress.json` § motion.
