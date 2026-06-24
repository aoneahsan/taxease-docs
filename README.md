# TaxEase Docs

Public documentation site for **[TaxEase](https://taxease.aoneahsan.com)** — a cross-platform tax & professional-services app with 60+ free calculators, document generators, and a service-request workflow.

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

## Deploy (dual-hosting — USER-ONLY)

This site is configured for two hosts; pick one as the live DNS target for `taxease-docs.aoneahsan.com`:

- **Firebase Hosting:** `yarn firebase:deploy` (project `taxease-docs` in `.firebaserc`).
- **GitHub Pages:** push to `main` triggers `.github/workflows/deploy-pages.yml`. Enable in repo Settings → Pages → Source = "GitHub Actions". The custom domain comes from `static/CNAME`.

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
