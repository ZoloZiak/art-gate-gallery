import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://art-gate-gallery.vercel.app',
  output: 'static',
  adapter: vercel({
    edgeMiddleware: false,
  }),
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
