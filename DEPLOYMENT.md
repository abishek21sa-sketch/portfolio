# Deployment readiness — v3.0.0

The site is intentionally static-export friendly (`output: "export"`) so it can be hosted on Vercel or another static host.

## Local acceptance on Windows

```powershell
$env:Path = "C:\Program Files\nodejs;$env:Path"
cd C:\path\to\portfolio-v3
npm.cmd install
npm.cmd run typecheck
npm.cmd run build
.\scripts\validate_site.ps1
```

A successful production build writes the static site to `out\`.

## Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel as a Next.js project.
3. Use the default build command: `npm run build`.
4. Do not set a fake production URL. Once the real Vercel/custom-domain URL is final, set `NEXT_PUBLIC_SITE_URL` using `.env.example` as the reference.

## Final-domain SEO pass

Canonical URLs and a production sitemap are intentionally deferred until the real public URL is known. Do not publish localhost or placeholder-domain canonicals.

At final deployment:

- set the production domain;
- add canonical URLs / sitemap using that exact domain;
- add a final Open Graph image after the visual identity and portrait are locked;
- verify the résumé link and all external profile links;
- run Lighthouse/accessibility checks against the deployed URL.
