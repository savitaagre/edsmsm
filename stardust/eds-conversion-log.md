# EDS conversion log — wknd.site /us/en.html (replica archetype us-en-html)

Written by stardust:deploy via replica Phase 5 · started 2026-10-16T13:17:00Z · branch `feat/wknd-home-replica`
Target: org `savitaagre` · site `edsmsm` · DA content `https://content.da.live/savitaagre/edsmsm`
Preview host: `feat-wknd-home-replica--edsmsm--savitaagre.aem.page` (label 36 chars ≤ 63)
DA path: `/us/en` (matches the source URL `/us/en.html`)

## Step 2 — names + reuse (locked; single-page conversion, no naming questions)

| Prototype section | D1 block? | D11 collection pattern | EDS name | Decode tier |
|---|---|---|---|---|
| `header.site-header` | chrome | header | `header` (rebuilt, from `/nav`) | template-slotted |
| `section.hero-carousel` | yes (interactive, 3 slides) | carousel (row per slide: image \| text) | `hero-carousel` — `carousel` powers the adventure galleries (16 pages), so archetype-prefixed | reconstructive (repeat group) |
| `.featured-teaser` | yes (2-col composition) | columns (image \| text) | `featured-teaser` | template-slotted |
| `.section-title--underline` ×2 | no — default content | — | section style `title-underline` | default content |
| `h3` "Where do you want to go?" | no — default content | — | default content | default content |
| `.image-list` ×2 | yes (repeat group) | cards (row per card: image \| text) | `image-list` — `cards` exists (unused by current content), left untouched | reconstructive |
| `.btn-primary` ×2 | no — default content (bare-links-too) | — | `a.button` | default content |
| `.separator` ×2 | no — default content (`<hr>`) | — | default content | default content |
| `.hero-teaser--imagebottom` | yes (full-bleed image + overlapping card) | hero | `hero-teaser` — `hero` exists (unused by current content), left untouched | template-slotted |
| `footer.site-footer` | chrome | footer | `footer` (rebuilt, from `/footer`) | template-slotted |

**Foundation reuse decision.** Baseline gate of the EXISTING implementation (same code, served at
`main--edscapstoneajay--ajayajju2412.aem.page/us/en`) vs live: **50.91 % at 1440** (header band 44.6 % hot) —
not reusable at replica fidelity. The foundation is rebuilt from the gated prototype. Existing custom
properties and block-facing classes in `styles/styles.css` are kept (additive), so the 16 adventure and
5 magazine documents keep resolving their tokens. Nothing on this site is previewed or published yet.

## Dynamic surface (stardust/dynamic-features.md)

- `hero-carousel`: click switching (prev / next / indicators), fadeIn .5s; no autoplay (dead on live).
- `header`: `body.scrolly` at scrollTop > 15; language menu (`left = toggle.position().left − 240`,
  `showMenu`/`open`, outside click closes); mobile nav `body.navPanel-visible` (≤1024).
- D1 Sign In / D2 tags / D3 locales: interim static paths (owner decisions open).

## Publish decision

Preview only (`--no-publish`). Publishing live is the owner's decision after PR review.

## Step 3 — Foundation (C0)

- `styles/brand.css`: every pre-existing custom property kept (`--text-color` … `--link-hover-color`,
  all `--body-font-size-*` / `--heading-font-size-*`); prototype `:root` tokens lifted verbatim beside
  them (`--text`, `--brand-yellow`, `--surface-*`, `--font-*`, `--fs-*`, `--button-size`,
  `--utility-height`, `--shell` 1164px, `--gutter` 14px) plus `--max-width` 1680px (cap-probe shell cap).
  `--nav-height` 200px (>=1025) / 130px (<=1024) = the source page-root padding-top.
- `styles/styles.css`: structural layer kept verbatim (body gate, `header { height: var(--nav-height) }`
  + visibility reservation, `main > .section` scaffold). Fixed chrome (#108-variant): `body > header`
  is `position: fixed` (height auto, so the floating box never covers content when the scroll morph
  shrinks it); the in-flow reservation is `main { padding-top: var(--nav-height) }` — the late header
  load shifts nothing. `main` and `body > footer` are capped at 1680px (the source page root);
  the footer host box (48px top margin, 16/24 padding, #202020) is lifted onto `body > footer` (#31).
  <=1024: `body.navPanel-visible` translates `main` + footer 275px (the source page root).
- Global rules lifted from the prototype: border-box reset, body 18px/1.5, `p` 18px/2.5 justify
  0 0 13.5px, h1–h3 Asar 400 (40/36/24) 27px/13.5px, h4–h6 Source Sans Pro 600 uppercase with UA
  margins (h4 21.28px as on live), links #0045ff with NO global hover (live has none — the old
  underline hover is removed), section-title underline now `padding-top: 8px` (live
  `.cmp-title--underline`; was `margin-top: 12px`) and written with descendant selectors (EW10).
- `img { display: block; max-width: 100%; height: auto }` (#36). The gated geometry DOES depend on
  inline images in four places — header/footer logos (done here: `display: inline` in the chrome
  CSS), and the hero-teaser, image-list and featured-teaser media (prototype `img` is inline):
  those blocks must set `display: inline` (vertical-align baseline) locally.
- Button system: `a.button` = prototype `.btn-primary` (#ffea00, #202020, 600 14px/21px uppercase,
  no radius, 48px tall, 16px 32px, no hover — none on live); `p.button-wrapper` is a flex row with
  no margin (48px tall, like the prototype's flow-root `.col`). Edit-mode repaint (a) + (b) shipped.
- Section scaffold retuned to the prototype rhythm: `main > .section { margin: 0 }`; wrappers
  `padding: 0 14px`, `max-width: 1164px` at >=1025px; full-bleed escape for
  `.hero-carousel-wrapper` / `.hero-teaser-wrapper`. **Deviation risk:** the 16 adventure and
  5 magazine documents were built on the old 40px section margins / 24–32px padding / 1680px
  wrappers; their tokens all still resolve, but their spacing follows the new scaffold.
- Lint: `stardust/prototypes/us-en-html.js` got 3 behaviour-neutral targeted edits (destructuring,
  two line-length splits) — `eslint .` covers it. Chrome CSS disables `no-descending-specificity`
  (independent regions share element tails) and, scoped, `selector-class-pattern` for the live
  state names `showMenu` / `navPanel-visible`.
- Token gate: blocks reference two undeclared properties, both intentional per-element inline
  properties set by `header.js` (`--lang-flag` with a US fallback, `--flag` per country).

## Step 4 — Fonts

- `fonts/*.woff2` did NOT match the capture: all seven were a different subset build (Asar 14 KB vs
  22 KB captured). Replaced with `stardust/current/assets/fonts/` (byte-identical to the gated
  prototype's). Roboto files left in place (unreferenced; harmless).
- `wknd-icon-font.ttf` copied to `fonts/`, `@font-face` (font-display: block) in `styles/fonts.css`.
- Metric-matched `source-sans-pro-fallback` (Arial) and `asar-fallback` (Times New Roman) faces in
  styles.css, named second in both stacks. Values per the #11 recipe (fontTools unavailable, so
  head/hhea/cmap/hmtx were read from the woff2 brotli stream directly); size-adjust uses the
  capsize frequency-weighted a–z+space advance, because the subsets' OS/2 xAvgCharWidth is
  polluted by non-Latin glyphs: SSP vs Arial 94.16 / 104.51 / 28.99 %, Asar vs Times New Roman
  105.13 / 113.76 / 52.98 % (size / ascent / descent; line-gap 0). Linux capture hosts have no
  Arial/Times, so stitch-shot warns that the two `-fallback` faces failed to load — expected,
  the brand faces load (verified: Asar 400, SSP 400/600, wknd-icon-font).
  Latin `unicode-range` only, so glyphs outside the brand subset (footer "Ⓒ") fall through to the
  source's own system stack. head.html carries no font lines.
- Favicon: `stardust/current/assets/favicon.png` → `/favicon.png`, one `<link rel="icon">` in
  head.html (favicon.ico untouched). Flags: `icons/flags/*.svg` (code-served, root-relative).

## Step 6 — Chrome

- `/nav` (DA `nav.html`, source `stardust/deploy/content/nav.html`) — 5 sections, template-slotted
  by index: 0 account (Welcome / Sign In / Sign Out), 1 language (en-US toggle + 7-country list),
  2 brand (logo), 3 nav (Home > Magazine, Adventures, FAQs, About Us), 4 tools (Search).
  `/footer` — 4 sections: 0 brand (light logo), 1 nav (Home > 4), 2 social (h4 Follow Us + 3 links,
  title = aria-label), 3 legal (3 paragraphs). Logos are DA media (`media/chrome/*.svg`, pure
  vector); the blocks drop the pipeline's webp `<source>` for SVG pictures so the vector renders.
- Decode: node-slotting (EW1) — authored `<p>`/`<ul>`/`<h4>` are moved into wrapper slots and styled
  through descendant selectors (EW2); the delivered `li > p > a` (#98) is unwrapped; icon-only
  controls (search, social) move their authored label into a hidden span. The mobile panel is a
  stripped clone of the nav list (EW4, `@ew-exempt`). decorateButtons() (bare-links-too) runs on
  the fragments, so both blocks undo `.button` / `.button-wrapper` / derived titles on chrome links.
- Behaviour = the progress.json motion ledger, header only: body.scrolly (> 15), language menu
  (left = toggle.position().left − 240, showMenu / open, outside click closes), mobile panel
  (body.navPanel-visible, .5s). Hovers: header nav + search #ffea00, footer nav underline. Extra
  (no visual change): the closed mobile panel is also `visibility: hidden` (off-canvas links are
  not focusable), Escape closes it, reduced-motion drops the transitions.
- D3 (owner decision, OPEN): language-menu locale links keep the source paths verbatim
  (`/us/es.html`, `/ca/en.html` …) — they 404 on EDS until those locale trees migrate. D1 (open):
  Sign In / Sign Out stay `#sign-in` / `#sign-out` with no backend.
- Internal chrome hrefs are root-relative and extensionless (`/us/en`, `/us/en/magazine`,
  `/us/en/ai-powered-search` …); footer legal links stay external, fully qualified.
