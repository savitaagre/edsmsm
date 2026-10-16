<!-- stardust provenance: skill=stardust:dynamics · phase=plan draft · 2026-10-16T12:33:56.281Z · input stardust/current/_dynamics.json (1 pages, 14 findings) · target probe https://main--edsmsm--savitaagre.aem.page -->
# Dynamic features — draft inventory (curate into `stardust/dynamic-features.md`)

One row per detected finding. Merge duplicates, drop noise, keep every axis honest. Columns: disposition = what we do · reproducibility = what it needs · status = where it stands (reference/triage.md).

| # | id | class | feature | pages | disposition | reproducibility | status | pattern | decision needed | notes |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | a-cms-app-settings-object-adobedatalayer | A | CMS / app settings object adobeDataLayer | 1/1 | static-snapshot | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 2 | a-cms-app-settings-object-granite | A | CMS / app settings object Granite | 1/1 | static-snapshot | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 3 | a-cms-app-settings-object-cq | A | CMS / app settings object CQ | 1/1 | static-snapshot | self | pending | read-settings | — (keys name endpoints, ids, vendors) |  |
| 4 | d-first-party-data-file-get-content-wknd-us-en-jcr-content-c | D | first-party data file GET /content/wknd/us/en/_jcr_content/contexthub.pagedata.json | 1/1 (reach 1/1) | data-fed | self | pending | sheet-sync | none (sync from the source origin) | **dead on target (404)** |
| 5 | d-first-party-data-file-get-home-users-o-oa6pkcc2rneodh2ni0q | D | first-party data file GET /home/users/o/oa6PkCC2rneOdh2ni0qG.infinity.json | 1/1 (reach 1/1) | data-fed | self | pending | sheet-sync | none (sync from the source origin) | **dead on target (404)** |
| 6 | d-first-party-data-file-get-libs-granite-csrf-token-json | D | first-party data file GET /libs/granite/csrf/token.json | 1/1 (reach 1/1) | data-fed | self | pending | sheet-sync | none (sync from the source origin) | **dead on target (404)** |
| 7 | d-first-party-data-file-get-libs-granite-security-currentuse | D | first-party data file GET /libs/granite/security/currentuser.json | 1/1 (reach 1/1) | data-fed | self | pending | sheet-sync | none (sync from the source origin) | **dead on target (404)** |
| 8 | i18n-locale-variants-ca-ca-ch-ch-ch | I18N | locale variants ca,ca,ch,ch,ch | 1/1 | rebuild-native | needs-business-decision | pending | locale-tree | scope of the locale trees |  |
| 9 | m-modal-trigger-data-modal-url-chrome-only-target-outside-do | M | modal trigger data-modal-url (chrome only) → target outside DOM at capture | 1/1 (reach 2/1) | rebuild-native | self | pending | chrome-interaction | none (motion-observe evidence) |  |
| 10 | t-tag-manager-adobe-launch | T | tag manager: Adobe Launch | 1/1 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 11 | t-analytics-adobe-analytics-experience-cloud-id | T | analytics: Adobe Analytics / Experience Cloud ID | 1/1 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 12 | t-marketing-ad-retargeting-pixel | T | marketing: ad / retargeting pixel | 1/1 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 13 | t-unknown-third-party-host-wkndsitewknd887971p-112-2o7-net | T | unknown third-party host wkndsitewknd887971p.112.2o7.net | 1/1 | embed-passthrough | needs-business-decision | pending | consent-gated-tags | which tags run on the new host; property ids |  |
| 14 | x-sign-in-account-links | X | sign-in / account links | 1/1 | decided-out | needs-backend | pending | decided-out | auth / commerce on the new host? |  |

## Triage

- **Ships autonomously (reproducibility `self`):** 8 row(s) — read-settings, sheet-sync, chrome-interaction.
- **One owner decision batch:** 5 row(s) — scope of the locale trees · which tags run on the new host; property ids.
- **Already delivered by the capture pipeline:** 0 row(s) — no work.
- **Host-bound on the target:** 4 of 4 probed API paths — the off-origin data work.

## Phases

- **data** — 4
- **tags** — 4
- **detect** — 3
- **locale wave** — 1
- **interactive** — 1
- **register** — 1
