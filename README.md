# AleksUniDev — interactive portfolio

Portfolio for Aleksandr Dubovikov, Senior Unity Developer. Russian and English, a lightweight isometric mini-game, three case studies, experience and direct contact links.

## Development

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

The production output is `dist/`. No backend, tracking services, paid APIs, cookies or remote fonts are used. All images are served locally. Content lives in `src/content.js`; UI and interactions in `src/main.js`; the isometric canvas in `src/world.js`; responsive styles in `src/style.css`.

Expanded project responsibilities, engineering stories, per-project stacks, the technology catalogue and earlier-project details live in `src/details.js`, in Russian and English. They are merged into the base content; the mini-game keeps its short summaries.

## Deployment

Repository: `AleksUniDev/aleksunidev.github.io`. Enable GitHub Pages with GitHub Actions as the build source. Every push to `main` builds and deploys the site using `.github/workflows/deploy.yml`.

The site is configured for an origin-root deployment, including the free organization site `https://aleksunidev.github.io/` and a future custom domain. Deploying under a repository subdirectory would require changing Vite base and asset paths.

## Custom domain

After registering a domain, verify ownership in GitHub account settings, add the domain in repository Settings → Pages, and configure the registrar's DNS using the current GitHub documentation:

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

Enable HTTPS after DNS and certificate provisioning complete. Update canonical/OG URLs, `public/robots.txt`, and `public/sitemap.xml`. Do not add a CNAME or point DNS at a domain you do not own.

## Content and assets

Professional claims were taken from the owner's resume updated 27 September 2026. Existing conversation context informed the narrative; it was not used to invent product or performance claims. The original resume, phone number, date of birth and private project source code are not published.

Portfolio case descriptions distinguish the owner's contribution from the product itself. The SolPlex allocation reduction is approximate and limited to heavy UI screens, as stated in the resume. Current project screenshots are illustrative of the product and are not claimed to be exact captures of the versions the owner worked on.

Third-party visuals remain the property of their respective owners. See `ASSET_SOURCES.md`. The ant diagram and mini-game are original conceptual illustrations made for this portfolio, not screenshots of INSTINCT & SIGNAL.

## Accessibility

All project content can be reached without playing. Buttons provide an accessible alternative to canvas pointing. Dialogs support Escape and focus return. Reduced-motion preferences disable CSS animation and make canvas travel instant. A minimal no-JavaScript portfolio and a print stylesheet are included.
