# AFAQYOMI Creative Studio

Existing AFAQYOMI public website and API workspace. Preserve the current Vite/React design, portfolio, media, and founder content when extending the project.

## Run & Operate
- `pnpm --filter @workspace/afaqyomi-studio run dev` — run the public website
- `pnpm --filter @workspace/afaqyomi-studio run typecheck` — typecheck the website
- `pnpm --filter @workspace/afaqyomi-studio run build` — build the website
- `pnpm --filter @workspace/api-server run dev` — run the API server
- `pnpm run typecheck` — full workspace typecheck
- `pnpm run build` — build workspace packages

## Stack
- pnpm workspaces, Node.js 24, TypeScript
- Frontend: Vite + React + Wouter + Tailwind CSS
- API: Express 5
- Database libraries and API contracts are in `lib/`

## Source of truth
- `artifacts/afaqyomi-studio/src/data/pricing.ts` — all pricing categories and packages
- `artifacts/afaqyomi-studio/src/data/services.ts` — public service descriptions
- `artifacts/afaqyomi-studio/src/data/faq.ts` — FAQ content and categories
- `artifacts/afaqyomi-studio/src/data/projects.ts` — portfolio projects
- `artifacts/afaqyomi-studio/src/data/siteConfig.ts` — brand and contact configuration

## Pricing notes
Prices provided in the project brief are displayed as starting prices. Music Mixing & Mastering starter and pro prices remain clearly marked for confirmation. Custom website and multi-track audio work are quoted by scope. Edit package values and labels in `pricing.ts`; do not hard-code pricing in UI components.

## Important
Do not replace the existing app with the separate Next.js starter folder. Preserve current routes, media, social links, and visual system. Backend form persistence, admin authentication, uploads, and notification work are a later implementation phase.
