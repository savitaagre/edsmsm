<!-- stardust:provenance
  writtenBy: stardust:extract
  writtenAt: 2026-10-16T12:28:00Z
  readArtifacts: stardust/current/_computed-styles.json, stardust/current/_brand-extraction.json, stardust/current/pages/us-en-html.html, stardust/replica/capture/css/clientlib-site.lc-edab4768979fadcb02662ded9e221c99-lc.min.css
  scope: single page (https://wknd.site/us/en.html, --single)
  mode: descriptive (current state, not a target)
-->
---
name: WKND
description: WKND is a collective of outdoors, music, crafts, adventure sports, and travel enthusiasts that want to share our experiences, connections, and expertise with the world.
colors:
  background: "#ffffff"
  text: "#202020"
  brand-yellow: "#ffea00"
  surface-grey: "#ebebeb"
  surface-light: "#f7f7f7"
  text-muted: "#696969"
  link-blue: "#0045ff"
  indicator-scrim: "rgba(0, 0, 0, 0.8)"
  hairline-light: "rgba(255, 255, 255, 0.05)"
typography:
  h1:
    fontFamily: "Asar, Georgia, 'Times New Roman', Times, serif"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 1.5
  h2:
    fontFamily: "Asar, Georgia, 'Times New Roman', Times, serif"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: 1.5
  h3:
    fontFamily: "Asar, Georgia, 'Times New Roman', Times, serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.5
  h4:
    fontFamily: "'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  paragraph:
    fontFamily: "'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 2.5
  label:
    fontFamily: "'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
rounded:
  none: "0"
  dot: "50%"
spacing:
  gutter: "14px"
  heading-top: "27px"
  heading-bottom: "13.5px"
components:
  button-primary:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1em 2.5em"
  button-secondary:
    backgroundColor: "{colors.surface-grey}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "48px"
---

# Design System: WKND (current state)

## Overview

WKND reads as an outdoor-travel magazine: large full-bleed landscape photography, a quiet
serif (Asar) for headlines, a clean humanist sans (Source Sans Pro) for everything else, and
a single loud accent — a flat signal yellow — reserved for calls to action. Layout is a
centred fixed container (max 1164px, 14px gutters) broken by full-bleed photographic bands
(the hero carousel and the "Next Adventures" teaser).

## Colors

- **Background `#ffffff`** and **text `#202020`** carry the page; the footer inverts to a
  `#202020` band with `#ebebeb` text.
- **Brand yellow `#ffea00`** is the only saturated colour: CTA buttons (`View Trips`,
  `Full Article`, `All Articles`, `See Trip`, `All Trips`) and the yellow underline motif.
- **Surface grey `#ebebeb`** fills the featured-article panel and secondary buttons.
- **Muted `#696969`** for card descriptions; **link blue `#0045ff`** is the default anchor
  colour (visible in footer inline links).

## Typography

Asar 400 for h1–h3 (40/36/24px, line-height 1.5, 27px top / 13.5px bottom margin).
Source Sans Pro for h4–h6 (600, uppercase), body (18px / 1.5) and running paragraphs
(18px / 2.5, justified). Buttons and labels: Source Sans Pro 600 14px uppercase. Type scale
is ad-hoc (36/24/18/16/14), not modular.

## Layout

Page shell capped at 1680px (`div.root.container` max-width — cap-probe, DESIGN.json
`extensions.breakpoints`); inside it, content bands use the fixed container
`max-width: 873pt` (1164px) centred above 1025px, `padding: 0 14px`; the hero card content is a
fixed 1192px box; featured teaser splits 709px image / 427px panel; image-list cards 274px.
Source breakpoints: 767/768px, 1024/1025px, 1200px. The hero carousel and the "Climbing New
Zealand" teaser are full-bleed; content bands sit inside the container.

## Elevation & Depth

Flat. One inset shadow (`rgba(0,0,0,.35) -3px 0 5px inset`) is the only shadow measured.

## Shapes

Square everything: buttons, cards and images have `border-radius: 0`. Circles (`50%`) only
for carousel indicator dots and social icon buttons.

## Components

- **Hero carousel** — 3 slides, full-bleed photo, white content card bottom-left with Asar
  headline, description and yellow CTA; previous/next arrows (icon font) and dot indicators.
- **Featured teaser** — image left, grey panel right with pretitle "Featured Article",
  Asar title, description and yellow CTA.
- **Underlined section title** — Asar h2 with a short yellow underline.
- **Image list (4-up cards)** — square-cropped image, uppercase sans title, muted one-line
  description (ellipsis), linked.
- **Primary button** — yellow, 14px 600 uppercase, `1em 2.5em`, no radius.
- **Footer** — dark band, light logo, nav links, "Follow Us" social icon buttons, legal copy.

## Do's and Don'ts

- Do keep yellow for actions only.
- Do keep photography full-bleed and uncropped by rounded corners.
- Don't introduce radius, gradients or shadows — the system is flat and square.
