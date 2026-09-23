import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://balkhirihamid.github.io',
  base: '/stor/',
  vite: {
    plugins: [tailwindcss()]
  },
  server: { host: true, port: 4321 },
});
