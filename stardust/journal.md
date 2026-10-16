# Journal — WKND same-design migration (replica)

Chronological log of every prompt execution. Most recent at the bottom.
See `skills/stardust/reference/journal-format.md` for entry format.

---

## 2026-10-16T12:21:55Z — Setup — replica flow stamped, project hygiene, script copies

**Prompt:** Migrate https://wknd.site/us/en.html keeping the same design; follow the stardust skills
without shortcuts; keep plan/tracking files and a general plugin-improvement notes file; work on a
feature branch from main.

**Decisions:**
- Flow `replica` (keep-design ask) → `state.json.flow = "replica"`, `flowSource: "user-phrase"`.
- Bounded single-page entry (`extract --single --dynamics`): the user named one URL.
- Feature branch `feat/wknd-home-replica` from `main`.
- Gate deps are NOT npm-installed (EMA rule); the plugin-root `node_modules` is byte-copied to
  `stardust/scripts/node_modules/` (gitignored) so the replica Setup's project script copies resolve.

**Artifacts touched:**
- `.gitignore` (stardust block, script node_modules), `.hlxignore` (`stardust/`) — updated
- `stardust/scripts/{replica,stardust,migrate,diff}/` — created (byte copies)
- `stardust/replica-plan.md`, `stardust/plugin-improvement-notes.md` — created

**Findings worth flagging:**
- The repo already holds an earlier WKND EDS migration (blocks `carousel`, `adventure-cards`,
  `magazine-cards`, `columns-featured` …, `tools/importer/import-homepage.js`); this site's DA
  content has no home page yet (`/us/en` 404 on `main--edsmsm--savitaagre.aem.page`).

**Open questions:** none

**Next:** Phase 1 extract.

---

## 2026-10-16T12:31:00Z — Extract — 1/1 page live-captured, brand surface + current-state spec written

**Prompt:** (replica Phase 1) `extract https://wknd.site/us/en.html --single --dynamics`.

**Decisions:**
- crawl.mjs run from the plugin tree (EMA rule); headless worked first time (no bot wall).
- Media, fonts and stylesheets harvested by browser-UA curl from the rendered-DOM URLs (crawl.mjs
  saved only the favicon); Google Fonts latin subsets self-hosted (OFL).
- Full extract Phases 3–6 run even on the bounded entry (brand surface, PRODUCT/DESIGN, brand
  review), so replica Phase 2 takes the verbatim-promotion branch.

**Artifacts touched:**
- `stardust/current/pages/us-en-html.{json,html}`, `assets/screenshots/`, `_crawl-log.json` — created (crawl.mjs)
- `stardust/current/_computed-styles.json` — created (style-census 1440 + 360)
- `stardust/current/assets/{media,fonts,logo.svg,favicon.png}`, `stardust/replica/capture/css/` — created
- `stardust/current/_brand-extraction.json`, `PRODUCT.md`, `DESIGN.md`, `DESIGN.json`, `brand-review.html` — created
- `stardust/current/DESIGN.json` `extensions.breakpoints` — written by cap-probe (shell 1680, content 1164)
- `stardust/state.json` — created (1 page extracted, type `landing`)

**Findings worth flagging:**
- Vision check ok. The page JSON's visibility filter drops carousel slides 2–3; their content is in
  `pages/us-en-html.html`.
- Source breakpoints: 767/768, 1024/1025, 1200. Fonts: Asar (headings), Source Sans Pro (body),
  wknd-icon-font (arrows, social, menu).

**Open questions:** none

**Next:** replica Phase 2 — preserve direction.

---

## 2026-10-16T12:40:34Z — Preserve direction — verbatim promotion, empty register, dynamics triaged (7 rows)

**Prompt:** (replica Phase 2) promote the captured spec; build the register; triage the dynamic surface.

**Decisions:**
- Verbatim promotion: stardust/current/{PRODUCT.md,DESIGN.md,DESIGN.json} → project root (byte-identical, cmp-checked).
- Root DESIGN.json added to .hlxignore (EDS serves every committed file; *.md was already ignored).
- Inconsistency register empty — pure replica (the user asked to keep the same design; no audit run).
- Dynamics: 14 detector rows curated to 7 (carousel, language switcher, mobile menu added as self
  rows from DOM evidence; AEM plumbing merged; tags merged). Owner decision batch D1–D3 (sign-in, tags,
  locales) asked once, not answered — interim static paths recorded as run assumptions, nothing decided-out.

**Artifacts touched:**
- PRODUCT.md, DESIGN.md, DESIGN.json (root) — created (promoted)
- stardust/direction.md — created (preserve mode + named deviations)
- stardust/replica/inconsistency-register.md — created (empty)
- stardust/current/_dynamics.json, dynamic-features.generated.md, stardust/dynamics/ — created (detector, plan draft)
- stardust/dynamic-features.md, stardust/dynamic-features-plan.md — created (curated)

**Open questions:**
- D1 Sign In, D2 analytics tags, D3 locale trees (stardust/dynamic-features.md § Decision batch).

**Next:** replica Phase 3 — recreate the home archetype.

---

## 2026-10-16T12:51:39Z — Recreate — home archetype authored as clean HTML/CSS (us-en-html-proposed.html)

**Prompt:** (replica Phase 3) recreate the one archetype (page type landing) from captured content + lifted CSS.

**Decisions:**
- Content verbatim from pages/us-en-html.json + the DOM sidecar (carousel slides 2–3, language menu,
  mobile nav, footer copy); truncated values re-read from the JSON by --path, never completed from memory.
- Values lifted from clientlib-site CSS (css-rules.mjs) and live computed styles (measure.mjs at 1440/360,
  plus 2560/1024/768 for the shell): shell 1164 + 14px gutters ≥1025, 1680 page cap, column padding 14,
  hero 640px image + 1192px card at -180px ≥1165 (16:9 image below), featured 2:1 flex, image-list
  260px cards, header fixed 194/117px with page offset 200/130px.
- Fixed header replicated fixed, with the source's body.scrolly morph (scrollTop > 15, lifted from
  clientlib-site JS) — the one sanctioned prototype JS. Carousel/menu/switcher behaviours deferred to
  interaction parity (motion observed first).
- Fonts self-hosted (Asar, Source Sans Pro — OFL; wknd-icon-font — the site's own icon font).
  Flag icons for the language switcher harvested (every url() rehosted).

**Artifacts touched:**
- stardust/prototypes/us-en-html-proposed.html, us-en-html.css, us-en-html.js, assets/ — created
- stardust/replica/capture/{css,js}/, measure-main.txt, measure-chrome.txt — created

**Open questions:** D1–D3 still open (dynamic-features.md).

**Next:** Phase 4 — first --full gate round at 1440 and 360.

---

## 2026-10-16T13:13:04Z — Source-fidelity gate — us-en-html PASS at 1440 (0.20%, Δh 0) and 360 (2.08%, Δh −1); motion 10/10 parity

**Prompt:** (replica Phase 4) gate the archetype against the live page per breakpoint, then interaction parity.

**Decisions:**
- iter1 (--full) map: 17.47% / 23.07%, Δh 63/69. Fix 1 — AEM grid columns are formatting contexts on
  live (no cross-column margin collapse): `.col { display: flow-root }`; hidden source nodes kept
  hidden (Welcome, Sign Out, level-0 Home); footer separator + nav padding → 0.21% / 2.24%.
- Fix 2 — content cap: live caps the band at 1164px with no padding (columns pad 14) → cap-probe PASS;
  en-US label hidden ≤475; greeting styled as the source label. Fix 3 — img titles carried verbatim,
  build-only aria-labels removed, social button font family, toggle line-height → content-diff none.
- Confirmation found a CSS-visible hidden Home link → hidden; chrome parity quiet at both widths.
- Residuals logged (all rendition texture / sub-pixel from the 290px rendition at 360) → progress.json.
- Motion observed, never inferred: implemented scrolly morph, carousel click switching (no autoplay —
  dead on live), language menu with the live left = position − 240 rule, mobile nav, 3 fired hovers.
- Approval recorded as `hands-off`: the user asked for the full flow without stopping.

**Artifacts touched:**
- stardust/prototypes/us-en-html-proposed.html, .css, .js — updated
- stardust/replica/progress.json, stardust/replica/motion/*.json — created
- stardust/replica/gates/ (untracked evidence), gates/prototypes-{1440,360}/ rows — created
- stardust/direction.md — named deviations appended

**Open questions:** D1–D3 (sign-in, tags, locales) remain open.

**Next:** Phase 5 — handoff to deploy (EDS blocks + DA content), published-origin gate.

---
