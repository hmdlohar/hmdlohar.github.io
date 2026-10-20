# hmdlohar.github.io

Personal portfolio of Hamid Lohar, live at **[hmdlohar.github.io](https://hmdlohar.github.io)**.

Static site: [Bun](https://bun.com) + [Hono JSX](https://hono.dev/docs/guides/jsx) rendered to plain HTML at build time, styled with [Tailwind CSS v4](https://tailwindcss.com). No client-side JavaScript.

## Develop

```sh
bun install
bun run dev     # http://localhost:3000, rebuilds on save
bun run build   # type-check (bun check) + build to dist/
```

## Where things live

| Path | What |
|---|---|
| `src/data.ts` | All content: profile, projects, experience, skills, reviews |
| `src/page.tsx` | Page layout |
| `src/styles.css` | Tailwind theme (colors, font, marquee) |
| `public/` | Copied as-is: favicons, `resume2.html` (printable resume) |
| `build.tsx` | Renders the page to `dist/`; `--serve` runs the dev server |

To add a project or job, edit `src/data.ts`. The page loops over it.

## Deploy

Every push to `main` builds and publishes to GitHub Pages via `.github/workflows/deploy.yml`.
