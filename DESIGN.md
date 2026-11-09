---
name: AMZYA Contracting LLC, under construction page
description: The AMZYA steel mark under erection on the brand's dark hairline ground, in English and Arabic.
colors:
  burgundy-700: "#5c1f2c"
  burgundy-600: "#74293a"
  burgundy-800: "#461722"
  burgundy-500: "#8a3b4c"
  burgundy-300: "#c98a96"
  gray-900: "#242424"
  gray-700: "#4d4d4d"
  gray-100: "#ebebea"
  off-white: "#f6f4f0"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Jost, sans-serif"
    fontSize: "clamp(2.25rem, 10.5vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  display-ar:
    fontFamily: "Noto Kufi Arabic, IBM Plex Sans Arabic, sans-serif"
    fontSize: "clamp(2rem, 9vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.32
    letterSpacing: "0"
  title:
    fontFamily: "Jost, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.4
  title-ar:
    fontFamily: "IBM Plex Sans Arabic, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0"
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  body-ar:
    fontFamily: "IBM Plex Sans Arabic, IBM Plex Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: "0"
  label:
    fontFamily: "Jost, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
  label-ar:
    fontFamily: "IBM Plex Sans Arabic, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0"
rounded:
  logo: "2px"
  control: "4px"
spacing:
  xs: "10px"
  sm: "12px"
  gutter: "16px"
  md: "20px"
  lg: "36px"
  foot: "40px"
components:
  button-solid:
    backgroundColor: "{colors.burgundy-700}"
    textColor: "{colors.off-white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "56px"
  button-solid-hover:
    backgroundColor: "{colors.burgundy-600}"
    textColor: "{colors.off-white}"
  button-solid-active:
    backgroundColor: "{colors.burgundy-800}"
    textColor: "{colors.off-white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.off-white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "56px"
  button-outline-hover:
    backgroundColor: "rgba(246, 244, 240, 0.08)"
    textColor: "{colors.white}"
  lang-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.off-white}"
    rounded: "{rounded.control}"
    width: "104px"
    height: "40px"
  lang-toggle-current:
    backgroundColor: "{colors.off-white}"
    textColor: "{colors.gray-900}"
---

# Design System: AMZYA Contracting LLC, under construction page

This file records how the under construction page (`/` English, `/ar` Arabic) applies the official AMZYA design system, dark theme. **The design system is the source of truth** for the full palette, scales, logo rules, voice and components; it is not restated here. Where this page differs from the system, the difference is named below and the shipped page is what is recorded. Tokens live in `app/globals.css` as `:root` custom properties named after the system's own (`--burgundy-700`, `--gray-900`, `--mark-angle`, `--ease-standard`, `--dur-base`).

## Overview

**Creative North Star: "The Mark Under Erection"**

The brand says "under construction" with its own mark: the AMZYA steel mark stands almost complete on the dark hairline ground while a crane lowers its last member into place, holds, and lifts on a slow loop. Everything else on the page is quiet, typographic and bilingual, so the steel carries the drama and the interface stays at the system's sharp, flat, architectural register.

The page is a single dark viewport on desktop: logo and language toggle at the top, the English headline left and the Arabic headline right of the central mark, the crane bleeding from the top edge, two actions and the services line along the foot. On phones it stacks: masthead, mark and crane, headlines, actions, services. The density is low and the hierarchy is absolute: one artwork, two headlines, two actions.

Imagery is raster steel composited onto the official mark's vector outlines, never a redraw of the logo and never stock construction imagery. Interface elements are semantic HTML with inline SVG icons.

**Key Characteristics:**
- Dark ground `#242424` with the system's crossing hairline pattern at the mark's 31-degree angle.
- Burgundy as the single accent: the solid action, the riveted lower plate of the mark, the service dividers.
- Two scripts at equal rank: English in Jost, Arabic in Noto Kufi Arabic, both headlines always on the page.
- Corners of 2 to 4px, no shadows, no glass, no bounce.
- One authored motion (the crane lowering the member) on the crane's own slow ease; reduced motion freezes it raised.

## Colors

A dark, near-neutral ground with one burgundy voice and warm off-white type, taken unchanged from the system's dark theme.

### Primary
- **Logo Burgundy** (burgundy-700): the solid WhatsApp button, text selection, and the painted base of the steel mark's lower plate (filled in `make-plates.mjs` with the same hex). It is also the logo's own burgundy.
- **Burgundy Lift** (burgundy-600): solid-button hover. This follows the system's dark-theme `--accent-hover`, which lightens rather than darkens on dark grounds.
- **Burgundy Press** (burgundy-800): solid-button active.
- **Divider Burgundy** (burgundy-500): the short rules between services (desktop) and before each service (phone).
- **Rose Hairline** (burgundy-300): the 3px focus ring, and at 10% alpha the burgundy strand of the ground pattern.

### Neutral
- **Site Charcoal** (gray-900): the page ground, the `theme-color`, and the text colour of the current language in the toggle.
- **Scaffold Gray** (gray-700): scrollbar thumb only.
- **Services Gray** (gray-100): the services line, one step down from the headlines.
- **Warm Off-White** (off-white): headlines, button labels, button and toggle borders (at 85% and 70% alpha), the active toggle fill, the dashed setting-out lines (at 50%).
- **Pure White** (white): outline-button hover border and label, and at 5% alpha the second strand of the ground pattern.

### Named Rules
**The One Burgundy Rule.** Burgundy is the only accent and it marks one action per view: the solid button. Everything else in burgundy is the mark itself or a hairline rule.

**The No Gray-on-Charcoal Rule.** The logo gray `#666666` never sets text on `#242424` (2.7:1). Secondary text on this page is gray-100.

## Typography

**Display Font:** Jost (English), Noto Kufi Arabic (Arabic)
**Body Font:** IBM Plex Sans (English), IBM Plex Sans Arabic (Arabic)
**Label Font:** Jost 600 uppercase (English), IBM Plex Sans Arabic 600 (Arabic)

**Character:** Geometric Jost and angular Kufi read as one architectural voice across two scripts; Plex carries everything functional. All four families are self-hosted from `app/fonts` through `next/font/local` (`lib/fonts.ts`) and exposed as `--font-display`, `--font-body`, `--font-display-ar`, `--font-body-ar`.

### Hierarchy
- **Display, English** (Jost 600, line-height 1.04, -0.01em): the headline "Our website is under construction." On desktop it is sized to the stage (4.05cqw); on phones it uses the frontmatter clamp. Balanced wrapping.
- **Display, Arabic** (Noto Kufi Arabic 700, line-height 1.32, no tracking): the Arabic headline, sized slightly smaller than English (3.85cqw desktop). The page's language sets which headline is the `h1`; the other is a `p` and on phones drops to 88% opacity.
- **Title** (Jost 500 / IBM Plex Sans Arabic 500, line-height 1.4): the services line. Desktop `max(13px, 1.36cqw)` (Arabic `max(13px, 1.24cqw)`), phones 16px.
- **Label** (Jost 600 uppercase, 0.08em tracking / Plex Sans Arabic 600, no case, no tracking): button labels and the EN side of the toggle. Desktop `max(14px, 1.45cqw)`, phones 16px.
- **Body** (Plex Sans 400, 16px, 1.6 / Plex Sans Arabic 400, 1.9): the document default; no running text is set on this page.

### Named Rules
**The Script Parity Rule.** Every English type role has an Arabic twin from the system's pairing, with taller line-height and slightly smaller display size. Arabic is never letter-spaced, never uppercased and never italic.

## Layout

**Desktop** (min-width 900px and aspect at least 4:3) is a fixed single viewport. The stage is `min(100vw, 100svh × 1.6875)` wide and up to 0.652 of its width tall, a CSS size container; every position inside it is measured from the approved comp in `cqw`. The stage is top-anchored so the crane always touches the top edge; actions sit 6.13cqw and services 2.9cqw from the stage foot. Actions are two equal-width buttons (min 22.69cqw) centred with a 2.08cqw gap.

**Phones and narrow or tall windows** stack in a single column, max 640px, 16px gutters, 40px foot padding. The scene breaks out of the gutters to full width; the mark takes about 88% of it and the boom runs off the edge. The scene fades in from the top under the masthead (mask from transparent to opaque over 14%) so the rigging never starts at a hard edge. Rhythm: 12px under the masthead and between actions, 20px between headlines, 36px before actions and before services, 10px between service rows.

**RTL** (`/ar`, `dir="rtl"`) mirrors the masthead (logo right, toggle left) and the stacking alignment. The scene is pinned `direction: ltr`: the steel mark and the member it receives never mirror; only the boom flips (`scaleX(-1)`) and swings to the other side of the hoist line so it clears the logo. The toggle is always `dir="ltr"` (EN left, عربي right).

### Named Rules
**The Artwork Never Mirrors Rule.** RTL mirrors layout, alignment and arrows. The logo, the steel mark, the hoisted member, icons and numbers keep their orientation.

## Elevation & Depth

Flat. There are no shadows anywhere on the page. Depth comes from the artwork alone: the raster steel reads as a lit object against the flat hairline ground, the hoisted member layers above the mark (rig plate `z-index` 2 over steel and boom at 1), and the crane plates fade into the ground at their cut edges.

The ground is the system's `.amz-pattern-dark`: two `repeating-linear-gradient` hairline sets at `90deg ± var(--mark-angle)` (31deg), 1px lines every 23px, one in burgundy-300 at 10% and one in white at 5%, over gray-900.

## Shapes

Sharp and architectural. Buttons and the language toggle use the control radius (4px; the desktop toggle scales as `max(4px, 0.25cqw)`); the logo link has the 2px radius so its focus ring stays square. Borders are hairlines in off-white: 1.5px on buttons, 1px on the toggle, 1.5px dashed for the setting-out lines. Nothing is pill-shaped or rounded beyond 6px.

The page's recurring geometry is the mark's own 31-degree diagonal, carried by the ground pattern, and its outlines, carried by the plates.

## Components

### Buttons
Confident, flat and full-width on phones.
- **Shape:** gently squared corners ({rounded.control}), 1.5px border.
- **Layout:** leading 22px inline SVG icon (Lucide geometry, 1.75 stroke, `currentColor`), label, trailing arrow; 14px gap on phones, 1.4cqw on desktop. Height 56px on phones, 4.24cqw on desktop.
- **Solid (WhatsApp):** burgundy-700 fill and border, off-white label. Hover lifts to burgundy-600, active presses to burgundy-800.
- **Outline (Email):** transparent with an off-white border at 85%. Hover fills with off-white at 8% and turns border and label pure white; active at 14%.
- **Arrow:** nudges 0.25em in the reading direction on hover. In RTL it is flipped with `scaleX(-1)` and the nudge follows the flip.
- **Motion:** background, border and colour transition at `--dur-base` (200ms) on `--ease-standard` (`cubic-bezier(0.2, 0, 0, 1)`). Reduced motion removes the transitions.
- **Focus:** 3px burgundy-300 outline, 3px offset.

### Navigation (Language Toggle)
- **Style:** a two-cell grid in a 1px off-white (70%) hairline frame with the control radius. EN is Jost 600 with 0.08em tracking; عربي is IBM Plex Sans Arabic 500.
- **States:** the current language is filled off-white with charcoal text (`aria-current="page"`); the other cell takes off-white at 10% on hover. Focus ring is inset (-4px offset) to stay inside the frame.
- **Size:** 104 × 40px at 15px on phones; 9.1 × 3.12cqw at `max(13px, 1.12cqw)` on desktop.

### Services Line
- **Style:** the system's five service names in gray-100, Title role. Desktop: one centred wrapping row with 2px burgundy-500 vertical rules between items. Phones: a list with a 14 × 2px burgundy-500 dash before each item.

### Logo
The official `amzya-horizontal-reverse.svg` from the design system, used as an `img`, never redrawn or recoloured. 22.84cqw wide on desktop, `min(60%, 220px)` on phones. The favicon `public/icon.svg` is the official mark paths in gray `#666666` and burgundy.

### Erection Scene (signature)
Three raster plates positioned in percentages of the comp's scene box, plus two pieces drawn in code.
- **Plates** (`public/assets/plates/`): `steel-mark.png` (2048 × 1322, the mark's upper truss in steel and its lower plate in riveted burgundy, the top-right member cut out), `crane-rig.png` (hook, slings and the missing member), `crane-boom.png` (a slim lattice arm fading out at its far end). All carry alpha.
- **Production:** `scripts/make-plates.mjs` (sharp) takes generated steel, rig and boom artwork from `.impeccable/art/`, masks the steel to the official mark vector paths (the same `d` strings as `public/icon.svg`), splits the upper shape at the cut so the member travels with the rig, paints the lower shape's base in burgundy-700, keys near-black to transparency so the ground shows through the open steel, mirrors the base band to complete the bottom edge, and fades the boom with a gradient mask. Each shipped plate carries an `impeccable:prompt` PNG text chunk recording its generation jobs and the script; the same text is in `.impeccable/art/*.provenance.txt`.
- **Drawn in code:** two hoist cables above the rig plate (steel-shaded linear gradients so the cables never show a cut while lowered) and two 1.5px dashed setting-out lines from the member's ends to its seat, which shorten as it descends.
- **Motion:** `amz-lower`, 12s infinite on the crane's own ease `--ease-load` (`cubic-bezier(0.45, 0, 0.2, 1)`): hold raised (0–12%), lower 25.35% of the rig height (to 36%), hold seated (to 62%), lift (to 86%), hold. The guides scale on the same timeline. `prefers-reduced-motion` stops both and shows the raised state.
- **Accessibility:** the whole scene is `aria-hidden`; the plates have empty `alt`.

## Do's and Don'ts

### Do:
- **Do** treat the AMZYA design system (dark theme) as the source of truth and pull any new colour, size or component from it before inventing one.
- **Do** keep the ground as `.amz-pattern-dark` at the 31-degree `--mark-angle`.
- **Do** ship every type role in both scripts with the system's pairing: Jost / Noto Kufi Arabic for display, Plex Sans / Plex Sans Arabic for body and Arabic labels.
- **Do** mirror layout, alignment and arrows in RTL, and pin artwork, logo, icons and numbers to LTR.
- **Do** build artwork as raster plates masked to the official mark paths through `scripts/make-plates.mjs`, and keep provenance in every shipped raster.
- **Do** keep one solid burgundy action per view; secondary actions are off-white outline.
- **Do** run motion on `--ease-standard` at 120/200ms for UI and on `--ease-load` for the crane, and give every animation a reduced-motion state.

### Don't:
- **Don't** redraw, recolour or tint the logo or the mark outline; use the official reverse files.
- **Don't** set `#666666` text on `#242424`.
- **Don't** add shadows, glass, glows or bounce easing.
- **Don't** use gradients as surface or control fills. Gradients appear only inside the artwork's own rendering (cable shading, plate and scene fades) and in the hairline pattern.
- **Don't** round corners beyond 6px or make anything pill-shaped.
- **Don't** letter-space, uppercase or italicise Arabic.
- **Don't** mirror the steel mark or the member it receives.
