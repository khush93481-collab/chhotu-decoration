# Chhotu Decoration

A premium luxury single-page marketing website for Chhotu Decoration, a professional event decoration business in Jharkhand, India.

## Run & Operate

- `pnpm --filter @workspace/chhotu-decoration run dev` — run the frontend website
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, framer-motion, lucide-react
- No backend — purely static frontend marketing site

## Where things live

- `artifacts/chhotu-decoration/src/App.tsx` — main app entry, section imports
- `artifacts/chhotu-decoration/src/components/` — all section components
- `artifacts/chhotu-decoration/src/index.css` — global styles and CSS variables (black/gold theme)

## Architecture decisions

- Purely static frontend — no backend or database needed (contact form is UI-only)
- All images AI-generated via generateImage during build
- WEB POCKET branding appears in 3 places: footer, about section, sticky bottom-right badge

## Product

- Hero with carousel slider and CTA buttons
- Gallery with 9 categories and lightbox
- Services section with 8 service cards
- Why Choose Us, Testimonials, About, Contact sections
- Floating WhatsApp and Call buttons
- WEB POCKET clickable branding (links to https://logo-finder-web-pocket-et3x.vercel.app/)

## User preferences

- WEB POCKET must appear in footer, about section, and bottom-right corner with gold glow hover, underline on hover, tooltip "Visit Web Pocket", opens in new tab

## Gotchas

- framer-motion `ease` values must use the typed `Variants` type from framer-motion to avoid TS2322

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
