// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://JohaoIgnacio.github.io',
  base: '/fuero-landing',
  integrations: [svelte()],

  vite: {
    plugins: [tailwindcss()]
  }
});