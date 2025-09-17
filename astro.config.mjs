import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import { sanityConfig } from './src/utils/sanity-client';
import react from '@astrojs/react';  // ← 追加

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['cdn.sanity.io'],
  },
  integrations: [
    react(),                // ← React Island を有効化
    sanity(sanityConfig),   // Sanity
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      hmr: { path: '/vite-hmr/' },
      allowedHosts: ['.netlify.app'],
    },
  },
  server: {
    port: 3000,
  },
});
