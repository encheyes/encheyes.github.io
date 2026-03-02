# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal GitHub Pages website hosted at `simba.thosemccombs.com`. The React app lives in [my-app/](my-app/) — all development work happens there.

## Commands

Run from the `my-app/` directory:

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build
npm test           # Jest test runner (watch mode)
npm run deploy     # Build and deploy to GitHub Pages via gh-pages
```

## Architecture

Single-component React 19 SPA bootstrapped with Create React App. The entire app is [my-app/src/App.js](my-app/src/App.js) — it renders `simba.gif` centered on a dark background.

- Static assets go in [my-app/public/](my-app/public/) or [my-app/src/](my-app/src/) (imported assets get content-hashed by webpack)
- The [CNAME](CNAME) at the repo root sets the custom domain for GitHub Pages

## Deployment

`npm run deploy` runs `gh-pages` which pushes the `build/` output to the `gh-pages` branch. The CNAME file must remain at the repo root (not inside `my-app/`) for GitHub Pages to respect the custom domain.
