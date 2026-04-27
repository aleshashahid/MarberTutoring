# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Next.js 16** (App Router, Turbopack) with **React 19** and **TypeScript**
- **Tailwind CSS v4** — CSS-based config, no `tailwind.config.ts`; all theme extensions live in `app/globals.css` under `@theme inline`
- **shadcn/ui v4** — components in `components/ui/`
- **Framer Motion v12** — animations
- **lucide-react v1** — icons (note: no social brand icons like Facebook/Instagram/Twitter; use inline SVGs for those)

## Commands

```bash
npm run dev      # start dev server (Turbopack) at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Brand & Theme

Custom colors are defined in `app/globals.css`. Tailwind utilities are generated from `@theme inline`:

| Utility class       | Hex value |
|---------------------|-----------|
| `primary`           | `#8B7AAB` (lavender, overrides shadcn `--primary`) |
| `primary-light`     | `#B8A9D9` |
| `accent-mint`       | `#5BA89A` |
| `accent-mint-light` | `#8FC9BD` |
| `bg-cream`          | `#FAF7F2` |
| `bg-soft`           | `#F0EBF7` |
| `text-dark`         | `#2D2A3E` |
| `text-muted`        | `#6B6880` |

Fonts loaded via `next/font/google` in `app/layout.tsx`:
- `font-heading` → Playfair Display (`--font-playfair`)
- `font-sans` → Inter (`--font-inter`)

## Architecture

All components are in `components/`. The home page (`app/page.tsx`) composes them in order:

```
Navbar → Hero → TrustBar → SubjectsGrid → WhyMarber → Testimonials → CTASection → Footer
```

Components using browser APIs, `useState`/`useEffect`, or Framer Motion must have `"use client"` at the top. Static components (TrustBar, Footer) are Server Components.

## Editing Copy

Every component keeps its editable strings in constants at the top of the file (marked `// Editable`). Text changes don't require touching JSX.

## Placeholder Pages

`/about`, `/services`, and `/contact` are stub pages with a "Coming soon" message. They share Navbar and Footer.

## Tailwind v4 Notes

- No `tailwind.config.ts` — extend the theme by adding `--color-*` entries to the `@theme inline` block in `globals.css`
- Opacity modifiers (`text-primary/50`) work with CSS-variable-backed colors
- `--color-X` → generates `bg-X`, `text-X`, `border-X`, `fill-X`, etc.
