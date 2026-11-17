import { defineConfig } from 'astro/config';

// Set `site` to the real domain once it is chosen (used for SEO links).
export default defineConfig({
  site: 'https://kasacafelondon.com',
  server: { host: true },
});
