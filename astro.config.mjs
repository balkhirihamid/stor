import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import { execSync } from 'node:child_process';

function getSiteConfig() {
  if (process.env.NODE_ENV !== 'production') {
    return { site: 'http://localhost:4321', base: '/'};
  }

  if (fs.existsSync('./public/CNAME')) {
    const domain = fs.readFileSync('./public/CNAME', 'utf8').trim();
    if (domain) { return { site: `https://${domain}`, base: '/'}}
  }

  const remote = execSync( 'git config --get remote.origin.url', { encoding: 'utf8' }).trim();
  const match = remote.match(/github\.com[/:]([^/]+)\/([^/.]+)(?:\.git)?$/);

  if (!match) {
    throw new Error('Cannot determine GitHub repository');
  }

  const [, owner, repo] = match;

  if (repo === `${owner}.github.io`) {
    return { site: `https://${owner}.github.io`, base: '/'}
  }

  return { site: `https://${owner}.github.io/${repo}/`, base: `/${repo}/` };
}
const { site, base } = getSiteConfig();

export default defineConfig({
  integrations: [sitemap()],
  output: 'static',
  site, base,
  vite: {
    plugins: [tailwindcss()]
  },
  server: { host: true, port: 4321 },
});
