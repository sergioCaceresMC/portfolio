# AGENTS.md

## Stack

- **Astro 6** (+ `astro-icon`, `@fontsource-variable/open-sans`)
- **Tailwind CSS 4** (via `@tailwindcss/vite` — uses `@import "tailwindcss"`, not v3 `@tailwind` directives)
- **pnpm** (package manager)
- Node >= 22.12.0

## Commands

| Command | Action |
|---|---|
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Preview production build |
| `pnpm astro` | Astro CLI (e.g. `pnpm astro add`, `pnpm astro check`) |
| `pnpm lint` | ESLint (flat config via `eslint.config.js`) |

No formatter or test setup exists.

## Layout

- Pages: `src/pages/` (`.astro`)
- Components: `src/components/` (`.astro`)
- Layouts: `src/layouts/`
- Global CSS: `src/styles/global.css`
- Static assets: `public/`

All styling uses Tailwind utility classes applied directly in Astro templates. The only CSS file is `src/styles/global.css` which imports Tailwind.

## Quirks

- `pnpm-workspace.yaml` disables `esbuild` and `sharp` builds. Do not rely on features requiring sharp (e.g. Astro's built-in image optimization).
- No CI, no lint/format/typecheck scripts, no pre-commit hooks.
- Generated `.astro/` types directory and `dist/` are gitignored.
- The site is a single-page skeleton: `index.astro` uses `Layout.astro` + `Menu.astro`. Menu links to `/technologies`, `/projects`, `/contact` — none exist yet.
- GitHub link in `Menu.astro` is a placeholder (`tu-usuario`).
- Page `<title>` in `Layout.astro` still says "Astro Basics" (template default).
