# Dynamic features — detected (2026-10-16T12:33:31.465Z)

Pages probed: /us/en.html · settle 5000 ms · width 1440 · reach from 1/1 crawled pages

Evidence only. Every row must receive a disposition in `stardust/dynamic-features.md` (`dynamics-plan.mjs` drafts it).

| id | class | feature | pages | reach | evidence | hint |
|---|---|---|---|---|---|---|
| a-cms-app-settings-object-adobedatalayer | A API / personalisation / settings | CMS / app settings object adobeDataLayer | 1/1 |  |  | settings |
| a-cms-app-settings-object-granite | A API / personalisation / settings | CMS / app settings object Granite | 1/1 |  |  | settings |
| a-cms-app-settings-object-cq | A API / personalisation / settings | CMS / app settings object CQ | 1/1 |  |  | settings |
| d-first-party-data-file-get-content-wknd-us-en-jcr-content-c | D sheet / data file | first-party data file GET /content/wknd/us/en/_jcr_content/contexthub.pagedata.json | 1/1 | 1/1 | GET /content/wknd/us/en/_jcr_content/contexthub.pagedata.json → 200 | data |
| d-first-party-data-file-get-home-users-o-oa6pkcc2rneodh2ni0q | D sheet / data file | first-party data file GET /home/users/o/oa6PkCC2rneOdh2ni0qG.infinity.json | 1/1 | 1/1 | GET /home/users/o/oa6PkCC2rneOdh2ni0qG.infinity.json → 200 | data |
| d-first-party-data-file-get-libs-granite-csrf-token-json | D sheet / data file | first-party data file GET /libs/granite/csrf/token.json | 1/1 | 1/1 | GET /libs/granite/csrf/token.json → 200 | data |
| d-first-party-data-file-get-libs-granite-security-currentuse | D sheet / data file | first-party data file GET /libs/granite/security/currentuser.json | 1/1 | 1/1 | GET /libs/granite/security/currentuser.json?nocache → 200 | data |
| i18n-locale-variants-ca-ca-ch-ch-ch | I18N locale | locale variants ca,ca,ch,ch,ch | 1/1 |  | https://wknd.site/ca/en.html<br>https://wknd.site/ca/fr.html<br>https://wknd.site/ch/de.html | locale |
| m-modal-trigger-data-modal-url-chrome-only-target-outside-do | M modal / interactive | modal trigger data-modal-url (chrome only) → target outside DOM at capture | 1/1 | 2/1 | https://wknd.site/us/en.html#sign-in<br>https://wknd.site/us/en.html#sign-out | chrome-interaction |
| t-tag-manager-adobe-launch | T tag / consent | tag manager: Adobe Launch | 1/1 |  | assets.adobedtm.com | tags |
| t-analytics-adobe-analytics-experience-cloud-id | T tag / consent | analytics: Adobe Analytics / Experience Cloud ID | 1/1 |  | dpm.demdex.net<br>wkndsite.demdex.net | tags |
| t-marketing-ad-retargeting-pixel | T tag / consent | marketing: ad / retargeting pixel | 1/1 |  | cm.everesttech.net | tags |
| t-unknown-third-party-host-wkndsitewknd887971p-112-2o7-net | T tag / consent | unknown third-party host wkndsitewknd887971p.112.2o7.net | 1/1 |  | wkndsitewknd887971p.112.2o7.net | inspect |
| x-sign-in-account-links | X auth / commerce | sign-in / account links | 1/1 |  | https://wknd.site/us/en.html#sign-in | decided-out |
