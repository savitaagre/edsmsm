<!-- stardust provenance: skill=stardust:dynamics (via replica Phase 2) · phase=plan · 2026-10-16 · from stardust/dynamic-features.md -->
# Dynamic features plan — wknd.site (/us/en.html replica)

| Phase | Rows | Deliverable | Authoring contract | Verification | Owner decision | Effort |
|---|---|---|---|---|---|---|
| interactive (self) | 1 hero carousel, 2 language switcher, 3 mobile menu | Behaviours rebuilt in the prototype (Phase 3/4), then in the EDS `carousel` / header block JS (Phase 5) | Implement ONLY behaviours `motion-observe.mjs` sees fire on the live page (dead classes are not implemented) | `motion-compare.mjs` live vs prototype: parity on every fired behaviour; pixel number returns to the gated value | none | S |
| detect (static-snapshot) | 7 AEM runtime plumbing | nothing shipped | — | n/a | unfreezes only if D1 or D2 = keep | — |
| register / tags / locale | 4 Sign In, 5 tags, 6 locales | interim static paths (see dynamic-features.md § Decision batch) | Sign In renders as on source with no backend; no tag scripts; switcher hrefs verbatim | content-diff keeps the control and the links | D1, D2, D3 (open) | — |

Static first: none of these rows blocks the static recreation or the gate.
