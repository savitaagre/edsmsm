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
