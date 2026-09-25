import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  output: 'static',
  site: 'https://balkhirihamid.github.io',
  base: '/stor/',
  vite: {
    plugins: [tailwindcss()]
  },
  server: { host: true, port: 4321 },
});
