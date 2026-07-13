// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Publicado no GitHub Pages em https://danielmoraescoca.github.io/Yada/
// Quando houver um domínio próprio, troque `site` e remova `base`.
export default defineConfig({
  site: 'https://danielmoraescoca.github.io',
  base: '/Yada',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
