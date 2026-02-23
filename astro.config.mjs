// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://david-gamedevfolio.github.io',
  base: '/my-repo',
  integrations: [icon()],
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  }
});
