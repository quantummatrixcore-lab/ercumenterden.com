---
name: elite-component
description: Use when building ANY UI component for ercumenterden.com. Ensures correct typography role assignment, hover states, dark background optimizations, and elite visual standards.
---

# Elite Component Standards

## Typography Roles (STRICT)
1. Cormorant Garamond 700 italic ONLY for:
   - Hero name (.hero-name)
   - Section manifesto quotes (.manifesto-quote)
   - Platform names inside portfolio cards (.p-card-name)
   Never use for: descriptions, labels, nav, buttons

2. Inter 300/400/500 for:
   - All body descriptions (.card-body, .p-desc, .hero-thesis)
   - Paragraph text

3. JetBrains Mono ALWAYS for:
   - Nav links
   - All CTA button text
   - Metric labels (.metric-label)
   - Eyebrow text (.hero-eyebrow)
   - Badge/tag text
   - Footer links
   Always: UPPERCASE, letter-spacing 0.12–0.20em

## Interaction Standards
- Hover on cards: background shift surface-1 → surface-2 (transition 0.15s)
- Hover on cards: left border accent appears (border-left: 2px solid var(--platin), opacity 0–0.6)
- Hover on nav links: color shift text-faint → platin
- Hover on buttons: opacity 0.85 (primary), border-color + color transition (ghost)
- NO box-shadow for depth — use border opacity changes instead

## Button Standards
- border-radius: 2px (sharp corners — this is intentional)
- Primary: background var(--platin), color var(--ink), no border
- Ghost: transparent background, border 0.5px solid var(--rule-strong)
- Font: JetBrains Mono, font-size 10px, letter-spacing 0.14em, text-transform uppercase

## Animation Standards
- CSS-only, no JS libraries
- All animations wrapped in @media (prefers-reduced-motion: no-preference)
- Timing: subtle (0.15–0.3s transitions), atmospheric (14–20s loops)

## Card Standards
- Background: var(--surface-1) default, var(--surface-2) on hover
- Border: 0.5px solid var(--rule)
- Border-radius: 10px (cards), 2px (buttons), 1px (tags)
- Padding: 24px 28px (portfolio cards), 16px 20px (smaller cards)
