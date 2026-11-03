## 🔴 CRITICAL — PROJECT FROZEN (2026-11-03)

**TaxEase was moved to the idea projects and frozen on 2026-11-03 at commit `8534ca11a6d710e4146116a3bf67c6436b8b37c5` on branch `main`.** Owner's words:
"skip taxease, we will redevelop that fully and properly" · "move that to idea project and froze for now".

- Do **NOT** edit, fix, upgrade, build, deploy, document or "improve" anything in this repository.
- It will only ever be **redeveloped from scratch** under `~/Documents/01-code/production-projects/taxease-project-root/`
  (old code beside it for reference only), with the full standard — and **only when the owner types, in ALL CAPS, an
  explicit request naming this project**.
- Any other request to work here is refused. Rule: `~/.claude/rules/idea-projects-frozen.md`.
- Ledger: private repo `aoneahsan/projects-finalization-record` → `idea-projects/FREEZE-LEDGER.md`.

---

# TaxEase Docs

Public documentation site for **[TaxEase](https://taxease.aoneahsan.com)** — a tax & professional-services app for web and Android with a 50-tool free calculator directory, document generators, and a service-request workflow.

Built with [Docusaurus 3](https://docusaurus.io/). This is a **public** repository and contains **no secrets**.

## Develop

```bash
yarn install
yarn start      # dev server on http://localhost:5992
```

## Build

```bash
yarn build      # static site -> ./build
yarn serve      # preview the production build on http://localhost:5993
```

## Deployment

GitHub Pages publishes on each `main` push through `.github/workflows/deploy-pages.yml`. The custom domain comes from `static/CNAME`. Build, typecheck and inspect the local site before pushing; then confirm the Actions run and live routes. On 2026-10-21, immutable install, typecheck, production build, and controlled desktop/mobile Chrome passed. The workspace fleet tracker records the resulting Pages run and live probes.

## Content

- `docs/` — all documentation pages (Markdown).
- `sidebars.ts` — navigation order.
- `docusaurus.config.ts` — site config, SEO head tags (JSON-LD), theme.
- `static/` — `robots.txt` (AI-bot allowlist), `llms.txt`, `CNAME`, brand SVGs.
- `docs/tracking/taxease-docs-content-tracker.json` — long-tail SEO enrichment tracker.

## Links

- App: https://taxease.aoneahsan.com
- Google Play: https://play.google.com/store/apps/details?id=com.aoneahsan.taxease
- Author: https://aoneahsan.com

_Maintained by Ahsan Mahmood. MIT licensed._
