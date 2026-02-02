# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React 16 developer portfolio site using Create React App. Personal portfolio for Nirmit Dagli with a cyberpunk/terminal aesthetic theme.

## Build & Development Commands

```bash
npm start              # Dev server (runs fetch.js first, then starts at localhost:3000)
npm run build          # Production build (runs fetch.js first)
npm run deploy         # Deploy to GitHub Pages (gh-pages -b master -d build)
npm test               # Run Jest tests
npm run format         # Format code with Prettier
npm run check-format   # Check formatting without changes
```

**Note:** `fetch.js` runs before start/build to fetch GitHub pinned repos and Medium blog data via APIs. Requires `.env` configuration.

## Environment Setup

Copy `env.example` to `.env` and configure:
- `REACT_APP_GITHUB_TOKEN` - GitHub personal access token
- `GITHUB_USERNAME` - GitHub username
- `USE_GITHUB_DATA` - "true" to enable GitHub data fetching
- `MEDIUM_USERNAME` - Optional Medium username for blog section

## Architecture

### Key Files
- **`src/portfolio.js`** - Main configuration file containing ALL portfolio content (greeting, skills, education, work experience, projects, contact info). Edit this to update site content.
- **`src/containers/Main.js`** - Layout orchestrator that renders all sections
- **`src/contexts/StyleContext.js`** - Theme context for dark/light mode toggle
- **`fetch.js`** - Pre-build script that fetches GitHub profile and Medium blogs

### Directory Structure
- **`src/containers/`** - Full-page sections (greeting, skills, education, workExperience, projects, etc.)
- **`src/components/`** - Reusable UI components (header, footer, cards, buttons)
- **`src/contexts/`** - React Context providers (StyleContext for theme)
- **`src/hooks/`** - Custom hooks (useLocalStorage)
- **`src/assets/`** - Lottie animations and images

### Patterns
- Functional components with hooks throughout
- Container components hold business logic; components are presentational
- SCSS files paired with each component (no CSS-in-JS)
- Theme colors defined in `src/index.css` (CSS variables) and `src/_globalColor.scss`
- Sections can be shown/hidden via `display: true/false` flags in portfolio.js

### Data Flow
```
portfolio.js (config) → Main.js → Container sections → UI components
                                        ↓
                            StyleContext (theme state)
                                        ↓
                            useLocalStorage (persistence)
```

## Git Workflow

- Main branch: `newmaster`
- Deployment branch: `master` (managed by gh-pages)
- Build artifacts (`build/`) are tracked in git

## Testing

Tests use Jest with Enzyme adapter. Test files are colocated with components as `*.test.js` files.
