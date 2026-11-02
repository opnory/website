# opnory/website — agent contract

This repository is the public Opnory marketing site: a static Vite + React +
TypeScript single page. The product lives in `opnory/opnory`; this site holds no
product code, no secrets, and no server runtime.

## Validation

```bash
npm ci
npm run build        # tsc && vite build -> dist/
test -f dist/index.html
git diff --check
```

## Delivery (GitOps)

Git is the only way a change reaches the live site. Nothing is deployed from a
workstation.

**Identity.** Agents act on GitHub as the `opnory-agent` GitHub App, never with
the operator's credentials. Hermes agent profiles load this automatically:
`gh` and `git` in an agent shell authenticate as the App. The App cannot
approve its own pull requests.

**Change path.**
1. Branch.
2. Push.
3. Open a PR (App-authored).
4. The required checks pass.
5. Check the Cloudflare preview.
6. The operator approves.
7. Merge.

`main` is protected by the org ruleset `default-branch-two-party`:
- a PR with 1 approval is required, and the last push must be approved by
  someone other than its pusher;
- stale approvals are dismissed;
- force pushes and deletion are blocked;
- only org admins (the operator) can bypass it.

**Testing.**
- `ci` (job `build`) runs the typecheck and production build on every PR and
  on push to `main`. It is the required status check for `main`.
- Cloudflare Pages also builds every branch, and posts a preview URL on the
  `Cloudflare Pages` check.

**Deployment.**
- Cloudflare Pages (project `opnory`) is linked to this repository through
  the Cloudflare GitHub App.
- It pulls `main` and builds it with `npm run build`.
- It publishes `dist/` to production.
- No deploy credential exists in GitHub, and CI does not deploy.
- Build settings live in the Pages project, not in this repo. Changing them
  in the dashboard is an operator action, recorded in the PR that needs it.

**Rollback.**
- Open a revert PR against `main`.
- After the operator merges it, Pages deploys the previous content.
- A Pages dashboard rollback is an emergency-only step. It is closed by the
  same revert PR, so `main` again matches production.
