// astro.config.mjs
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import { sanityConfig } from './src/utils/sanity-client';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['cdn.sanity.io'],
  },
  integrations: [
    react(),                // React Island を有効化
    sanity(sanityConfig),   // Sanity
  ],
  vite: {
    server: {
      hmr: { path: '/vite-hmr/' },
      allowedHosts: ['.netlify.app'],
    },
  },
  server: {
    port: 3000,
  },
});
