# Inconsistency register — wknd.site replica

Everything not listed here is frozen; any design delta found by the gate is a defect, not an improvement.
(The register was empty — pure replica — through Phase 4. The entry below was added at delivery, append-only.)

## R-01 — the page has no `<h1>`; the delivery contract requires exactly one

- **Evidence:** live heading outline of https://wknd.site/us/en.html has no `h1`
  (`stardust/current/pages/us-en-html.json` → `headings`: h2 ×5, h3 ×1, h4 ×1); the EDS delivery
  checks require exactly one `<h1>` in the delivered `.plain.html`
  (replica `reference/handoff-contract.md` § 2, deploy protocol step "`.plain.html`: … one `<h1>`").
- **Finding:** a structural/SEO defect of the source (no top-level heading), surfaced by the
  delivery contract — not a visual preference.
- **Minimal change:** the first hero slide's title "WKND Adventures" is authored as `<h1>` instead of
  `<h2>`, styled identically (Asar 400 36px/54px, same margins) — no visual change; every other
  heading keeps its source level.
- **Status:** applied
- **Where:** landing (`/us/en`) — `hero-carousel`, slide 1. Gate: pixel unchanged (1440 0.25 %,
  360 1.73 % on the preview origin); content-diff reports no ROLE SWAP for it.
