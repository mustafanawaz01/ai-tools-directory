// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  adapter: cloudflare(),
});