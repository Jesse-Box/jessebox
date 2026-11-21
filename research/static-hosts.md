# Static hosts for Astro: Netlify vs alternatives

Research for [#158](https://github.com/Jesse-Box/jessebox/issues/158) (part of map [#157](https://github.com/Jesse-Box/jessebox/issues/157)). This file covers facts only. The hosting decision belongs to #159.

Scope: a fully static Astro build (`astro build` → `dist/`, no adapter, no server functions), deployed from the public GitHub repo `Jesse-Box/jessebox`. Checked against official docs and pricing pages on 2026-11-21.

## Current setup (observed, not from docs)

- `dig NS jessebox.net` → `dns1–4.p01.nsone.net`, which is Netlify DNS (NS1-backed). The domain is registered at DreamHost.
- The Netlify DNS zone also holds **email records for Fastmail**: MX `in1/in2-smtp.messagingengine.com` and SPF `include:spf.messagingengine.com`. DKIM CNAMEs are probably there too. If DNS moves anywhere, these records must be recreated first, or email breaks.
- The repo is public, which matters for GitHub Pages on a free plan.
- The current Gatsby site has no `_redirects` or `netlify.toml`, so there are no redirect rules to migrate today.

## Summary table

| | Netlify | Cloudflare (Pages / Workers static assets) | Vercel | GitHub Pages |
|---|---|---|---|---|
| Git deploy from GitHub | Yes, built-in | Yes, built-in (Pages Git integration or Workers Builds) | Yes, built-in | Yes, through a GitHub Actions workflow |
| Preview per PR | Yes: `deploy-preview-N--site.netlify.app` | Yes: hash URL plus branch alias | Yes: commit URL plus branch URL | **No** native support |
| Fixed-URL branch deploys | Yes: `branch--site.netlify.app`, or `branch.yourdomain` with Netlify DNS | Yes: `branch.project.pages.dev`, or a custom domain if DNS is on Cloudflare | Yes: `project-git-branch-scope.vercel.app`, or a custom domain assigned to a branch | No |
| Redirect file | `_redirects` / `netlify.toml` | `_redirects` | `vercel.json` | **None.** Astro outputs meta-refresh HTML pages instead |
| Wildcard redirects | Yes (splats, placeholders) | Yes (splats, placeholders) | Yes (path patterns, regex) | No |
| HTTP 410 | Docs allow any status code; 410 isn't named in the examples | **No.** `_redirects` only supports 3xx (and 200 proxy) | Not with `redirects`; only through the low-level `routes` `status` field | No |
| Apex domain with DNS kept elsewhere | Yes (A record / ALIAS) | **Pages/Workers: no.** Apex requires a Cloudflare zone (nameservers moved to Cloudflare) | Yes (A record) | Yes (A/AAAA/ALIAS) |
| Free tier (static) | New accounts: 300 credits/month, hard cap (≈20 prod deploys if traffic were zero). Legacy free: 100 GB + 300 build min | Unlimited static requests and bandwidth; 500 builds/month (Pages) | 100 GB transfer, 1M requests, 100 deploys/day; **personal, non-commercial use only** | 1 GB site, 100 GB/month soft bandwidth |
| Lock-in surface | `_redirects` format, Netlify DNS (incl. branch subdomains) | `_redirects` format (close to Netlify's), Cloudflare zone for apex | `vercel.json` | Almost none (plain files plus an Actions workflow) |

Details and sources follow.

---

## Netlify

### Build/deploy from GitHub, previews, branch deploys

- Pull requests get a Deploy Preview automatically at `deploy-preview-<PR#>--<site>.netlify.app`. Every deploy also gets an immutable permalink. Deploy Previews get `X-Robots-Tag: noindex`. [Deploy Previews](https://docs.netlify.com/deploy/deploy-types/deploy-previews/)
- Branch deploys give a branch a **persistent URL** `<branch>--<site>.netlify.app`. You can turn them on per branch, by prefix wildcard (`features/*`), or for all branches. They're off by default. The most recent branch deploy is **not** noindexed, so Netlify recommends password protection or private project visibility. [Branch deploys](https://docs.netlify.com/deploy/deploy-types/branch-deploys/)
- **Branch subdomains on your own domain** (e.g. `staging.jessebox.net`) work through the UI only when the domain uses Netlify DNS. Without Netlify DNS there's a support-guide workaround. [Manage domains for branch deploys](https://docs.netlify.com/manage/domains/manage-domains/manage-domains-for-branch-deploys/)
- `netlify.toml` deploy contexts (`[context.branch-deploy]`, `[context.<branch>]`) let you set build settings per branch. [Branch deploys](https://docs.netlify.com/deploy/deploy-types/branch-deploys/)

### Redirects

- Rules live in a `_redirects` file in the publish directory or in `[[redirects]]` in `netlify.toml`. `_redirects` is processed first, and the first match wins. [Redirects and rewrites](https://docs.netlify.com/routing/redirects/)
- Splats (`/news/* /blog/:splat`) and placeholders (`/news/:year/:slug`) are supported. Limits: a splat only works at the end of a path, and you can't exclude paths except by rule ordering. [Redirect options](https://docs.netlify.com/manage/routing/redirects/redirect-options/)
- Status codes: "You can specify the HTTP status code for any redirect rule". The default is 301, and the documented examples are 301, 302, 404 and 200. **307 is explicitly unsupported.** 410 isn't listed in the examples, so whether it works needs a quick test (e.g. `/old/* /gone.html 410`). [Redirect options](https://docs.netlify.com/manage/routing/redirects/redirect-options/)
- With 10,000+ rules Netlify recommends wildcards or Edge Functions. [Redirects and rewrites](https://docs.netlify.com/routing/redirects/)

### Custom domain and DNS

- External DNS works: CNAME for subdomains, and ALIAS/ANAME/flattened CNAME or an A record to `75.2.60.5` for the apex. Netlify adds apex and `www` together automatically. [Configure external DNS](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/), [Bring a domain to Netlify DNS](https://docs.netlify.com/manage/domains/configure-domains/bring-a-domain-to-netlify/)
- Netlify DNS (what jessebox.net uses now) is optional. Features that need it: branch subdomains in the UI, and automatic deploy subdomains. [Get started with domains](https://docs.netlify.com/manage/domains/get-started-with-domains/)

### Cost and free-tier limits

- **Accounts created on or after 2025-09-04 use credit-based plans.** Older accounts stay on a **Legacy** plan unless the owner switches, and switching is irreversible. [Credit-based pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/), [Legacy pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-legacy-plans/legacy-pricing-plans/)
- Credit-based Free plan: **300 credits/month, hard limit**. Costs: production deploy 15 credits; bandwidth 20 credits/GB; web requests 2 credits per 10k. Deploy Previews, branch deploys and failed deploys cost **0 credits**. **When credits run out, all projects are paused** and show "Site not available". Personal is $9/month for 1,000 credits; Pro is $20/month for 3,000. [Pricing](https://www.netlify.com/pricing/), [How credits work](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/)
  - Example math from those rates: 10 production deploys (150) + 5 GB bandwidth (100) + 200k requests (40) = 290 credits, just under the cap.
- Legacy Free plan: 100 GB bandwidth/month and 300 build minutes/month, both hard limits, with 1 concurrent build. [Legacy pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-legacy-plans/legacy-pricing-plans/)
- Which plan the jessebox account is on can be checked under Team → Usage & billing → Billing details (same source).

### Leaving Netlify

- Site files: the Astro `dist/` output is portable. The Netlify-specific parts are `_redirects`/`netlify.toml` and any use of Forms or Functions (out of scope for this map).
- `_redirects` rules move almost as-is to Cloudflare, which uses the same file name and a similar syntax. Vercel needs them rewritten as JSON. GitHub Pages can't carry them over at all.
- DNS is the main exit cost. The zone, including the Fastmail MX/SPF/DKIM records, has to be recreated at the new DNS provider. Then the nameservers at DreamHost get changed. The Netlify DNS docs don't describe a zone-file export; records are managed in the UI or API. [DNS records](https://docs.netlify.com/manage/domains/configure-domains/dns-records/)

---

## Cloudflare (Pages, and Workers with static assets)

Note: the Astro docs say "Cloudflare recommends using Cloudflare Workers for new projects", and their Cloudflare guide now leads with Workers static assets. Pages is still documented and supported, and Cloudflare publishes a Pages → Workers migration guide. [Astro: Deploy to Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/), [Migrate from Pages to Workers](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/)

### Build/deploy, previews, branch deploys

- Pages: every PR from the same repo gets a preview URL. Every non-production branch gets a hash URL `<hash>.<project>.pages.dev` plus a **branch alias `<branch>.<project>.pages.dev`** that always points to the latest commit on that branch. Preview URLs are public by default; you can put Cloudflare Access in front. Previews are not indexed by default. [Preview deployments](https://developers.cloudflare.com/pages/configuration/preview-deployments/)
- Branch controls: all, none, or custom include/exclude lists with wildcards. [Branch deployment controls](https://developers.cloudflare.com/pages/configuration/branch-build-controls/)
- **A custom domain for a branch** (e.g. `staging.jessebox.net`) works only with a **proxied Cloudflare DNS record**. With external DNS, the alias serves production instead. [Add a custom domain to a branch](https://developers.cloudflare.com/pages/how-to/custom-branch-aliases/)
- Workers static assets: Workers Builds connects to GitHub. Non-production branches create a Preview with a stable Preview URL (`<preview>-<worker>.<subdomain>.workers.dev`) and per-deploy URLs, and the PR gets a comment. [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/), [Previews](https://developers.cloudflare.com/workers/previews/)
- Deployment retention on Pages: 30 days, but the 100 most recent and the current production deploy are always kept. [Pages limits](https://developers.cloudflare.com/pages/platform/limits/)

### Redirects

- `_redirects` file, same name and a similar format to Netlify's. Splats and placeholders are supported. The default status is **302** (Netlify's is 301). [Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/)
- Supported codes are 301, 302, 303, 307 and 308, plus 200 proxying. "Rewrites (other status codes)" are ❌, so **a `_redirects` rule can't return 410 or 404**. Query-parameter matching, domain-level redirects, and country or cookie conditions are also unsupported. [Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/)
- Workers static assets has the same `_redirects` support table, including the same lack of non-3xx codes. [Workers static assets redirects](https://developers.cloudflare.com/workers/static-assets/redirects/)
- Limits: 2,000 static + 100 dynamic rules, and 1,000 characters per rule. Beyond that, account-level Bulk Redirects. [Pages limits](https://developers.cloudflare.com/pages/platform/limits/)
- A 410 would need code: a Pages Function or Worker script. Those requests count against the Workers free quota of 100,000 requests/day. [Pages Functions pricing](https://developers.cloudflare.com/pages/functions/pricing/)

### Custom domain and DNS

- **Apex domain (`jessebox.net`) requires the domain to be a Cloudflare zone, i.e. nameservers moved to Cloudflare.** Subdomains can use a CNAME from external DNS to `<project>.pages.dev`. [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- Workers Custom Domains likewise require an active Cloudflare zone. [Workers Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- So for jessebox.net on Cloudflare, Cloudflare DNS would replace Netlify DNS. The domain can stay registered at DreamHost; only the nameservers change.

### Cost and free-tier limits

- Static asset requests are **free and unlimited** on free and paid plans. [Pages Functions pricing](https://developers.cloudflare.com/pages/functions/pricing/), [Workers static assets billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)
- Pages Free: 500 builds/month, 1 concurrent build, 20-minute build timeout, 20,000 files per site, 25 MiB max file size, 100 custom domains per project. [Pages limits](https://developers.cloudflare.com/pages/platform/limits/)
- Workers Builds Free: 3,000 build minutes/month, 1 concurrent build, 20-minute timeout. [Workers Builds limits](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/)

### Leaving Cloudflare

- `_redirects` moves to Netlify nearly unchanged. Watch the default status code: 302 on Cloudflare, 301 on Netlify.
- Exit cost is DNS again: if Cloudflare hosts the zone, the records move back out and the nameservers change at DreamHost.
- A Workers project adds a `wrangler.jsonc` config file to the repo.

---

## Vercel

### Build/deploy, previews, branch deploys

- The GitHub integration deploys every push. The latest push on each PR gets a preview URL posted as a PR comment. PRs from forks need authorization. [Vercel for GitHub](https://vercel.com/docs/git/vercel-for-github)
- Each branch has a **fixed URL**, `<project>-git-<branch>-<scope>.vercel.app`, that tracks the latest deploy on that branch. Each commit also gets an immutable URL. [Generated URLs](https://vercel.com/docs/deployments/generated-urls)
- You can assign a custom domain to a Git branch (e.g. `staging.jessebox.net`). [Assigning a domain to a Git branch](https://vercel.com/docs/domains/working-with-domains/assign-domain-to-a-git-branch)

### Redirects

- `redirects` in `vercel.json` supports path patterns, wildcards and regex. `permanent` → 308/307, or set `statusCode` explicitly. The Bulk Redirects docs list allowed codes 301, 302, 303, 307 and 308. Vercel recommends 307/308. [vercel.json](https://vercel.com/docs/project-configuration/vercel-json), [Configuration redirects](https://vercel.com/docs/routing/redirects/configuration-redirects), [Redirects](https://vercel.com/docs/routing/redirects)
- The lower-level `routes` property takes a `status` ("A status code to respond with"). That's the only config-file way to return something like **410**; `redirects` doesn't do it. [vercel.json → routes](https://vercel.com/docs/project-configuration/vercel-json)
- Limit: 2,048 routes per deployment. [Limits](https://vercel.com/docs/limits)

### Custom domain and DNS

- External DNS works: an A record for the apex and a CNAME for subdomains, using the project-specific values shown in the dashboard. Vercel nameservers are optional. [Set up a custom domain](https://vercel.com/docs/domains/set-up-custom-domain)

### Cost and free-tier limits

- Hobby is $0 and Pro is $20/month. [Pricing](https://vercel.com/pricing)
- **Hobby is "for your personal or non-commercial use" only.** Vercel "may shut down and terminate projects or deployments using the Hobby plan without notice for any reason". [Terms of Service §4](https://vercel.com/legal/terms)
- Hobby includes 100 GB Fast Data Transfer, 1M CDN requests, 100 deployments/day, and 45-minute max build time. Going over a limit generally means waiting 30 days. [Hobby plan](https://vercel.com/docs/plans/hobby), [Limits](https://vercel.com/docs/limits)
- Not checked here: whether a portfolio site that markets the owner's design services counts as "commercial" under the Hobby terms.

### Leaving Vercel

- Redirects in `vercel.json` would need rewriting into the next host's format. Nothing else is Vercel-specific for a static Astro build (no adapter is needed). DNS stays wherever it is if Vercel nameservers were never adopted.

---

## GitHub Pages

### Build/deploy, previews, branch deploys

- Publish from a branch, or (recommended for non-Jekyll builds) with a **GitHub Actions workflow** that uploads `dist/` as a Pages artifact. The templates skip the deploy step on `pull_request`, so PRs get build checks but **no deployed preview**. [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [About Jekyll build errors](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-jekyll-build-errors-for-github-pages-sites)
- One site per repo. No branch deploys or PR previews built in; these would need extra tooling or a second host.

### Redirects

- GitHub Pages has no server-side redirect config. For a static build, Astro's `redirects` option "will output HTML files with the meta refresh tag by default", and "the status code is not used by the server". So no 301, no 410, and no wildcards. [Astro routing → redirects](https://docs.astro.build/en/guides/routing/)

### Custom domain and DNS

- Apex: A records to `185.199.108–111.153` (plus optional AAAA records), or ALIAS/ANAME. `www`: CNAME to `<user>.github.io`. GitHub redirects between apex and `www` automatically. "Enforce HTTPS" can take up to 24 hours to become available. DNS stays at any provider. [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

### Cost and free-tier limits

- Free for public repos. Published sites up to 1 GB, a **soft** bandwidth limit of 100 GB/month, a soft limit of 10 builds/hour (not applied to custom Actions workflows), and possible 429 rate limiting. Pages is not for running "your online business, e-commerce site, or … SaaS". [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- Builds use GitHub Actions minutes, which are free for public repos.

### Leaving GitHub Pages

- Close to nothing to undo: delete the workflow and repoint DNS. There are no host-specific config formats to translate.

---

## Notes against the map's criteria (facts, not a verdict)

- **Few moving parts.** Netlify, Cloudflare and Vercel each handle build, previews and redirects in one service. GitHub Pages needs an Actions workflow and lacks previews and redirects. Moving DNS (needed for a Cloudflare apex domain, or when leaving Netlify DNS) is a one-off migration that includes the Fastmail records.
- **Lock-in.** Netlify and Cloudflare share a near-identical `_redirects` format, so moving between those two costs least. Netlify DNS ties branch subdomains to Netlify, and a Cloudflare zone ties branch custom domains and the apex to Cloudflare. Vercel's config is its own format. GitHub Pages has the least host-specific config.
- **410 support.** Only Netlify's declarative redirects come close (any status code allowed; 410 needs a test), plus Vercel's low-level `routes`. Cloudflare needs a Function/Worker, and GitHub Pages can't do it.
- **Cost risk.** The credit-based Netlify Free plan pauses all sites at 300 credits, and production deploys alone cost 15 each. Legacy Netlify accounts keep the old 100 GB / 300-minute free tier. Cloudflare static serving is unmetered. Vercel Hobby carries a non-commercial clause and a no-notice termination clause.

## Open questions for #159

1. Is the jessebox Netlify account on a Legacy or a credit-based plan? This changes the free-tier picture a lot.
2. Does a Netlify `_redirects` rule with status 410 actually work? A one-line test on a branch deploy would settle it.
3. Is the Holding page or later portfolio "commercial" under Vercel Hobby terms?
