# TaxEase docs guide

**Last Updated:** 2026-10-21

**Context verified:** 2026-10-21. **Next routine review:** 2026-11-20.

This public Docusaurus 3 repository is `aoneahsan/taxease-docs` on `main`, inside `../taxease-project-root/`. The private `../taxease/` is a rebuild scaffold; `../taxease-old/` is the read-only still-live app. Document only behavior verified in actual code. Keep secrets, `.env` and service accounts out of this public repository.

`yarn install --immutable`, `yarn typecheck` and `yarn build` are the local gates. Serve `build/` and inspect desktop/mobile in a controlled browser before a `main` push. `.github/workflows/deploy-pages.yml` publishes GitHub Pages on push; `static/CNAME` pins `taxease-docs.aoneahsan.com`. No Firebase docs hosting configuration is present. Check the Actions run and live homepage, sitemap and robots after pushing.

On 2026-10-21 supported dependencies and Pages actions were refreshed. Immutable install, typecheck, production build, and controlled desktop/mobile Chrome passed without console, request, or overflow failures. [README.md](README.md) has commands; the workspace fleet tracker holds exact deployment verification. Update this guide pair together.

## Stop-work Git gate

<!-- RULE:stop-work-git-gate v2026-10-20 -->

Before stopping, commit every legitimate change and work-progress checkpoint in this repository and each independent nested repository, fetch and merge the designated upstream, push the documented working branch, then verify an empty worktree and `0 0` ahead/behind. Never stash, discard, reset, rebase, or force-push. If synchronization is blocked, report the exact repository, branch, blocker, and next action instead of calling the work complete. The full workflow remains authoritative in `~/.claude/rules/git-workflow.md`.
