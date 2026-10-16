<!-- stardust provenance: skill=stardust:dynamics (via replica Phase 2) · phase=triage (curated) · 2026-10-16T12:35:00Z · from stardust/dynamics/dynamic-features.generated-plan.md (14 rows) + motion evidence pending (Phase 4) · target probe https://main--edsmsm--savitaagre.aem.page -->
# Dynamic features — wknd.site (/us/en.html replica)

## Listings contract

none — the two image lists on the home page ("Recent Articles", "Where do you want to go?") are
authored, fixed lists on the source (AEM Core `image-list` with four hand-picked items each), not
query-driven listings. They ship as authored content; no index is read.

## Features

| # | id | feature | class | reach | disposition | reproducibility | status | pattern | decision / owner | evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | m-hero-carousel | hero carousel: 3 slides, prev/next, dot indicators (auto-advance to be confirmed by motion-observe) | M | 1/1 | rebuild-native | self | pending | chrome-interaction | none | `.cmp-carousel` in pages/us-en-html.html; 3 `cmp-carousel__item` panels |
| 2 | m-header-language-switcher | header language/region switcher (en-US toggle → country list) | M | 1/1 | rebuild-native | self | pending | chrome-interaction | none | `#langNavToggle`, header list of 7 regions / 11 locales |
| 3 | m-header-mobile-menu | mobile nav toggle (wkndicon-menu) | M | 1/1 | rebuild-native | self | pending | chrome-interaction | none | icon-font glyph U+E916 at 360 |
| 4 | m-sign-in-modal | Sign In modal trigger (`data-modal-url`, target outside DOM at capture) | M / X | 1/1 | static-snapshot | needs-business-decision | pending | chrome-interaction | owner: auth on the new host? (decision batch D1) | generated rows 9 + 14 merged; `#sign-in` |
| 5 | t-adobe-launch-analytics | Adobe Launch + Adobe Analytics / ECID + ad pixel + 2o7.net beacon | T | 1/1 | static-snapshot | needs-business-decision | pending | consent-gated-tags | owner: which tags run on the new host (decision batch D2) | generated rows 10–13 merged |
| 6 | i18n-locale-trees | locale variants (ca, ch, de, fr, es, it) linked from the switcher | I18N | 1/1 | static-snapshot | needs-business-decision | pending | locale-tree | owner: scope of locale trees (decision batch D3) | generated row 8 |
| 7 | a-aem-runtime-plumbing | AEM runtime objects + data files: adobeDataLayer, Granite, CQ, contexthub.pagedata.json, currentuser.json, csrf token.json, user infinity.json | A / D | 1/1 | static-snapshot | self | pending | read-settings | none — no visible output on the page; consumers are sign-in (row 4) and tags (row 5) | generated rows 1–7 merged; 4/4 API paths host-bound (404 on target) |

Notes:
- Row 7 is platform plumbing, not a feature: it renders nothing; its two consumers are rows 4 and 5.
  It ships nothing on the new host unless D1/D2 bring auth or tags back (reason recorded; unfreeze
  condition = D1 or D2 answered "keep").
- Rows 1–3 are the `self` set: implemented in the prototype after motion-observe confirms which
  behaviours fire (replica Phase 4 § Interaction parity — motion is observed, never inferred).

## Decision batch

One message to the owner. Asking was attempted on 2026-10-16 but not answered (the question was
dismissed), so all three stay **open owner decisions**. Rule 7 (static first) applies in the meantime;
the interim paths below are run assumptions — never `decided-out`:
- D1 interim: the "Sign In" control renders exactly as on the source, with no backend (`interim`).
- D2 interim: no tag scripts on the EDS page (`interim`); the Launch property can be added at delivery.
- D3 interim: only `/us/en` migrates; switcher links keep the source's paths (they resolve on
  wknd.site today; on EDS they 404 until those locales migrate — recorded scope debt).

The questions:
- **D1 — Sign In** (row 4): the source opens an AEM-authenticated modal. Options: keep the visible
  "Sign In" control with no backend (interim), or decide it out.
- **D2 — Analytics / tags** (row 5): carry the Adobe Launch property to the EDS host, or ship
  without tags for now.
- **D3 — Locale trees** (row 6): migrate only `/us/en` now (switcher links keep pointing to
  wknd.site), or plan the other locales.

## Register (decided-out)

| feature | reason | production statement |
|---|---|---|
| (none yet — decided-out needs an owner statement) | | |
