import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  site: env.PUBLIC_SITE_URL || 'http://localhost:4321',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
