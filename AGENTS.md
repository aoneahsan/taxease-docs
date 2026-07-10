# TaxEase Docs — AGENTS.md

> AI agent instructions. Last Updated: 2026-06-24

## Overview

Public documentation site for **TaxEase** (app at https://taxease.aoneahsan.com). Docusaurus 3 + TypeScript. Dual-hosted on Firebase Hosting (project `taxease-docs`) and GitHub Pages (`.github/workflows/deploy-pages.yml` + `static/CNAME`). Custom domain `taxease-docs.aoneahsan.com`.

## PUBLIC repo — NO secrets

`github.com/aoneahsan/taxease-docs` is **PUBLIC**. NEVER commit `.env`, keys, or service accounts. Docs content only. `.env*` stays git-ignored.

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo (`github.com/aoneahsan/taxease-docs`, remote `o`) -> NEVER commit secrets (`.env*` stays git-ignored); gitignore hygiene only.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

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


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)
