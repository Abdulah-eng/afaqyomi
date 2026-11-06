# AFAQYOMI website refinement

## What changed
- Applied a consistent premium visual layer across the website: deeper studio backgrounds, more deliberate borders, polished card interactions, refined form focus states, and smoother navigation.
- Added restrained section entrance motion, animated button sheens, image hover movement, and additional depth to the homepage's animated studio visual.
- Kept the existing AFAQYOMI navy / turquoise / warm-orange brand palette.
- Preserved the founder portrait, audio samples, Google Knowledge Panel gallery, and existing portfolio/service/pricing content.
- Added reduced-motion handling for visitors who prefer less animation.
- Removed the Vite configuration's dependency on Replit-only plugins and made local port/base settings default safely, as part of preparing the project to run independently of Replit.

## Main application
`artifacts/afaqyomi-studio`

## Run locally from the workspace root
Install pnpm if it is not already installed, then run:

```bash
pnpm install
pnpm --filter @workspace/afaqyomi-studio dev
```

## Production build

```bash
pnpm --filter @workspace/afaqyomi-studio build
```

The build output is written to `artifacts/afaqyomi-studio/dist/public`.

## Validation note
This environment did not have workspace dependencies installed, so a production build and browser QA could not be completed here. The source changes are prepared, but the live website has not been deployed.
