import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://su3doesign.github.io',
  base: '/CapQ',
  output: 'static',
  build: {
    format: 'file'
  }
});