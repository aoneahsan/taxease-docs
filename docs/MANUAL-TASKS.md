# Manual / User-Only Tasks — TaxEase Docs
> The ONE place for everything only you (the human) can do. Fixed path: docs/MANUAL-TASKS.md.
> Excluded from the published site (see `docusaurus.config.ts` → `docs.exclude`) — maintainer-only.
> Global spec: ~/.claude/rules/manual-tasks.md.   Last updated: 2026-07-21

## ⏳ Pending manual tasks
| # | Task | Why only you | Detailed runbook | Status |
|---|------|--------------|------------------|--------|
| 1 | Enable GitHub Pages for `aoneahsan/taxease-docs` | Repo setting; the deploy workflow cannot run until Pages is switched on | Settings → Pages → Build and deployment → Source = **GitHub Actions**. `.github/workflows/deploy-pages.yml` then deploys on every push to `main`. | ☐ Not started |
| 2 | Add the DNS record for `taxease-docs.aoneahsan.com` | Registrar/DNS access | `CNAME  taxease-docs  →  aoneahsan.github.io`. `static/CNAME` already carries the domain, so Pages keeps it on each deploy. Then set the custom domain in Settings → Pages and enable Enforce HTTPS. | ☐ Not started |
| 3 | Submit the site to search engines once it is live | Console accounts | Google Search Console + Bing Webmaster Tools → verify domain → submit `https://taxease-docs.aoneahsan.com/sitemap.xml`. | ☐ Not started |

## ✅ Completed manual tasks
| # | Task | Completed |
|---|------|-----------|
| — | Commit + push the `.gitignore` hygiene edits | 2026-07-16 (commit `30c15fa`) |
