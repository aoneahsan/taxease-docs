# TaxEase Docs — AGENTS.md

> AI agent instructions. Last Updated: 2026-06-24

## Overview

Public documentation site for **TaxEase** (app at https://taxease.aoneahsan.com). Docusaurus 3 + TypeScript. Dual-hosted on Firebase Hosting (project `taxease-docs`) and GitHub Pages (`.github/workflows/deploy-pages.yml` + `static/CNAME`). Custom domain `taxease-docs.aoneahsan.com`.

## PUBLIC repo — NO secrets

`github.com/aoneahsan/taxease-docs` is **PUBLIC**. NEVER commit `.env`, keys, or service accounts. Docs content only. `.env*` stays git-ignored.

## Conventions

- `routeBasePath: '/'`; `intro.md` has `slug: /` (homepage). Navigation in `sidebars.ts`.
- Brand blue `#2563eb` in `src/css/custom.css`. SEO: `static/robots.txt` AI-bot allowlist, `static/llms.txt`, JSON-LD in `docusaurus.config.ts`, per-page meta/OG.
- Document the REAL app only — honest framing, no fabricated features or stats.

## Commands

```bash
yarn install
yarn build          # static build -> ./build
```

Do NOT auto-run dev servers. Deploy is USER-ONLY (Firebase or GitHub Pages Action).

## SEO enrichment tracker

`docs/tracking/taxease-docs-content-tracker.json`. Follow `~/.claude/rules/seo-aeo-ranking.md` for long-tail batches.

## Author

Ahsan Mahmood — aoneahsan@gmail.com — https://aoneahsan.com
