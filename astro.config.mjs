import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@tailwindcss/vite';
import { googleFonts } from '@astrojs/google-fonts';

export default defineConfig({
  site: 'https://art-gate-gallery.vercel.app',
  output: 'static',
  adapter: vercel({
    edgeMiddleware: false,
  }),
  vite: {
    plugins: [tailwind()],
  },
  integrations: [
    googleFonts({
      subsets: ['latin', 'latin-ext'],
      fonts: {
        sans: {
          family: 'DM Sans',
          weights: ['400', '500', '600', '700'],
          variable: {
            name: '--font-sans',
            fallback: ['system-ui', 'sans-serif'],
          },
        },
        display: {
          family: 'Satoshi',
          weights: ['400', '500', '700'],
          variable: {
            name: '--font-display',
            fallback: ['system-ui', 'sans-serif'],
          },
        },
      },
    }),
  ],
});
