# TaxEase Docs — Project Rules

> Last Updated: 2026-06-24

## Overview

Public documentation site for **TaxEase** (`../taxease`, app at https://taxease.aoneahsan.com). Built with Docusaurus 3 + TypeScript. Dual-hosted: Firebase Hosting (project `taxease-docs`) AND GitHub Pages (`.github/workflows/deploy-pages.yml` + `static/CNAME`). Custom domain: `taxease-docs.aoneahsan.com`.

## PUBLIC repo — NO secrets

This repo is **PUBLIC** (`github.com/aoneahsan/taxease-docs`). NEVER commit `.env`, API keys, service accounts, or any secret. `.env*` is git-ignored. Docs content only.

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo (`github.com/aoneahsan/taxease-docs`, remote `o`) -> NEVER commit secrets (`.env*` stays git-ignored); gitignore hygiene only.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

## Stack & conventions

- Docusaurus 3.10, `routeBasePath: '/'`, `intro.md` has `slug: /` (homepage).
- Brand primary blue `#2563eb` (from the app's `--primary` token) in `src/css/custom.css` + `theme-color`.
- SEO floor: `static/robots.txt` (AI-bot allowlist: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Applebot, Bingbot…), `static/llms.txt`, sitemap (auto), JSON-LD WebSite + Organization + SoftwareApplication in `docusaurus.config.ts` headTags, per-page meta/OG.
- Content documents the REAL TaxEase app (calculators, document generators, service requests, dashboard, extension) — keep it honest; no fabricated features.

## Commands

```bash
yarn install
yarn start          # dev (port 5992) — do NOT auto-run servers
yarn build          # static build -> ./build
```

## Deploy = USER-ONLY

`yarn firebase:deploy` or GitHub Pages Action. Agents never deploy.

## SEO long-tail enrichment

Tracker: `docs/tracking/taxease-docs-content-tracker.json` (batch schema). Add per-page rich content over time per `~/.claude/rules/seo-aeo-ranking.md`.

## Author

Ahsan Mahmood — aoneahsan@gmail.com — https://aoneahsan.com
