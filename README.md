# AI Tools Directory

A static Astro site for an AI tools directory focused on SEO-friendly categories, tool pages, and comparison pages.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Content structure

- `/` homepage
- `/categories/` category index and detail pages
- `/tools/` tool index and detail pages
- `/best/` comparison pages
- `/faq/` FAQ
- `/about/` editorial page

## Deploy to Cloudflare Pages

Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22+ (Astro supports the current project setup)

Recommended environment variable:

- `SITE_URL=https://your-pages-domain.pages.dev`

## Notes

- Set `SITE_URL` in production for canonical URLs and sitemap links.
- All content currently lives in `src/data/site.ts`.
- Add more tools, categories, or comparisons by editing the data file and creating matching pages if needed.
