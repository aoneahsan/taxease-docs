# TaxEase docs guide

**Context verified:** 2026-10-14. **Next routine review:** 2026-11-13.

This public Docusaurus 3 repository is `aoneahsan/taxease-docs` on `main`, inside `../taxease-project-root/`. The private `../taxease/` is a rebuild scaffold; `../taxease-old/` is the read-only still-live app. Document only behavior verified in actual code. Keep secrets, `.env` and service accounts out of this public repository.

`yarn install --immutable`, `yarn typecheck` and `yarn build` are the local gates. Serve `build/` and inspect desktop/mobile in a controlled browser before a `main` push. `.github/workflows/deploy-pages.yml` publishes GitHub Pages on push; `static/CNAME` pins `taxease-docs.aoneahsan.com`. No Firebase docs hosting configuration is present. Check the Actions run and live homepage, sitemap and robots after pushing.

On 2026-10-14 the Pages API showed the custom domain with HTTPS enforced. The first live homepage probe returned HTTP 503, followed by three consecutive HTTPS 200 responses; sitemap and robots returned 200. Continue monitoring the Pages run. [README.md](README.md) has commands; the workspace fleet tracker holds exact verification. Update this guide pair together.
