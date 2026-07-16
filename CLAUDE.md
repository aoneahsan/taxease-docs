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


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)

<!-- RULE:main-context-model-workflow v2026-07-16 -->
## Main-Context + Skills + Model Workflow (IRON-SOLID — CRITICAL)
1. **NO default/built-in sub-agents** (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) for ANY work in
   this project — they cannot invoke /skills, which RULE #0 makes mandatory. Do ALL work (planning, implementation,
   review, exploration) in the MAIN context. A sub-agent is allowed ONLY when a CUSTOM agent exists in
   `.claude/agents/` for that exact job.
2. **Skills always:** before any task, scan the available-skills list and invoke EVERY relevant skill; if a needed
   skill is missing, download/enable/install it (or use the nearest installed equivalent and say so) — never
   proceed skill-less.
3. **Model workflow:** PLAN and REVIEW on **Fable 5**; EXECUTE the approved plan on **Opus 4.8**. Plans in
   `~/.claude/plans/`; multi-phase features keep a resumable tracker (`docs/features/<slug>/00-tracker.json`),
   resumed rather than re-planned from zero.

Global records (rules, policy, audit reports) live in the `ahsan-notebook` repo at
`static/assets/claude-code/`; the `~/.claude/…` paths are symlinks into it. Full text: `~/.claude/CLAUDE.md`.
(Owner directives 2026-07-11 / 2026-07-14; fleet-rolled 2026-07-16.)
