# nirmitdagli.github.io

Personal portfolio for Nirmit Dagli — Cloud Infrastructure & Security Engineer.

Built as a single-page React app (Vite) designed to be presented during technical interviews: click any project card to open a full case study with **metrics, architecture diagram, and representative code**.

## Stack

- React 18
- Vite (dev server + build)
- Tailwind CSS via CDN — no PostCSS pipeline needed, theme extended inline in `index.html`
- Framer Motion for animations
- `gh-pages` for GitHub Pages deploys

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # output in /dist
npm run preview    # preview the built bundle locally
```

## Deploy to GitHub Pages (user page)

This repo deploys to `https://nirmitdagli.github.io` (a user page, so the branch is `main`, served from the root).

```bash
npm run deploy
```

Under the hood, `predeploy` runs `vite build` and then `gh-pages -d dist -b main`.

> If you rename this to a **project** page (e.g. `github.com/you/portfolio`), change the `base` in `vite.config.js` to `'/portfolio/'` and change the deploy branch to `gh-pages`.

## Adding your résumé

Drop your PDF at `public/resume.pdf`. The nav link and hero CTA point there. No code changes required.

## File structure

```
nirmitdagli.github.io/
├─ public/
│  ├─ favicon.svg
│  └─ resume.pdf           ← add your own
├─ src/
│  ├─ App.jsx
│  ├─ index.js
│  ├─ components/          Nav · Hero · Experience · Projects · ProjectCard ·
│  │                        ArchitectureDiagram · CodeBlock · Certifications ·
│  │                        Education · Contact · Footer
│  ├─ data/                experience.js · projects.js · certifications.js
│  ├─ hooks/               useScrollSpy · useCountUp · useInView
│  └─ styles/globals.css
├─ index.html              (Vite entry + Tailwind CDN + Google Fonts)
├─ tailwind.config.js      (reference only — see note in file)
├─ vite.config.js
└─ package.json
```

## Updating content

All content lives in `src/data/` — updating a project, role, cert, or publication is a single file edit.

- **Projects** (`src/data/projects.js`): metrics, architecture layers, and code snippets live here. Code is a plain array of strings, one per line, rendered by `CodeBlock.jsx` with light tokenization.
- **Experience** (`src/data/experience.js`): role / company / period / bullets / tech tags.
- **Certifications & Publications** (`src/data/certifications.js`).

## Design notes

- Palette: warm paper background (`#fafaf8 → #f5f5f0`) with teal (`#0d9488`) primary and amber (`#f59e0b`) secondary accents.
- Subtle SVG noise overlay on the body for depth (no image files).
- Typography: **Instrument Serif** (display), **Inter** (body), **JetBrains Mono** (code).
- `prefers-reduced-motion` respected globally.

---

© 2026 Nirmit Dagli.
