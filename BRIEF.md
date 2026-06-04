# Brief — MTX Hosting Brand & Design

Design reference for the MTX Hosting site. Pair this with the HTML preview (`reference/landing-preview.html`) for visual intent.

## Positioning

> Managed hosting for agencies, developers, and ambitious projects — fast, secure, and backed by people who actually know code.

Premium but not corporate. Dev-friendly but not nerdy. The parent is MTX Studio; MTX Hosting inherits its credibility.

## Voice & tone

- Confident, concise, no fluff or marketing fog.
- Speak to people who know what hosting is — respect their time.
- Short rhythmic lines. Plain words. A bit of warmth.
- Examples: "Where great projects live." / "Built different." / "We speak your language."

## Color

| Token   | Hex       | Use                                  |
|---------|-----------|--------------------------------------|
| bg      | `#080c10` | Page background                      |
| surface | `#0d1318` | Cards (with low-opacity white)       |
| accent  | `#00e5ff` | Primary accent, links, highlights    |
| accent2 | `#0077ff` | Gradient partner, depth              |
| ink     | `#e8edf2` | Body text                            |
| muted   | `#5a6a7a` | Secondary text, labels               |

Gradient: `linear-gradient(135deg, #00e5ff, #0077ff)` for primary buttons and headline accents.

Dark theme is the identity. Do not ship a light version in V1.

## Typography

- **Display / headings:** Syne (600–800), tight letter-spacing (-0.03 to -0.04em).
- **Mono / labels / code:** DM Mono — used for eyebrow labels (`// pricing`), price cycles, stat labels, footer.
- Body uses Syne 400 for cohesion, or a clean sans if readability needs it at small sizes.

## Layout motifs

- Subtle grid background (cyan lines, very low opacity) + a soft radial glow top-center.
- Cards: `1px` hairline borders at ~7% white, rounded `12–16px`, lift + accent border on hover.
- Section eyebrows in mono with `//` prefix.
- Stats bar: bordered row, divided columns, gradient numbers.
- Featured pricing card: accent top-border + tinted background + "Popular" pill.

## Micro-interactions

- Staggered fade-up on hero load (`animation-delay`).
- Hover lifts on cards/buttons.
- Optional custom cursor (dot + lagging ring) on desktop — nice-to-have, drop on mobile/touch.
- Pulsing badge dot.

## Logo

- "MTX" lettermark in a gradient rounded square + "MTXHosting" wordmark with "MTX" in accent.
- Icon-only mark works as favicon.
- Generate as inline SVG, no raster.

## Footer line

`© 2026 MTX Hosting — a MTX Studio product · Hosted in the EU`

MTX Studio is a UK company. Do not reference founder personal locations or non-UK cities on the site. "Hosted in the EU" is the infrastructure differentiator.

## Don'ts

- No purple gradients, no generic SaaS-template look.
- No stock photos of server rooms or people pointing at screens.
- No Inter/Roboto. No emoji overload (a few feature icons are fine).
- Don't compete on being the cheapest — compete on managed + EU + expertise.
