import type { APIRoute } from 'astro';
import { categories, comparisons, tools } from '../data/site';

const staticPaths = ['/', '/about/', '/best/', '/categories/', '/faq/', '/tools/'];
const dynamicPaths = [
  ...categories.map((item) => `/categories/${item.slug}/`),
  ...comparisons.map((item) => `/best/${item.slug}/`),
  ...tools.map((item) => `/tools/${item.slug}/`),
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://example.com';
  const urls = [...staticPaths, ...dynamicPaths].map((path) => `  <url><loc>${base}${path}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
