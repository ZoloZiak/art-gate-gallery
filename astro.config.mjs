import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

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
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
});
