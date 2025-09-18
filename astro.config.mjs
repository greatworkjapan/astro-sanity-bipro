// astro.config.mjs
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import { sanityConfig } from './src/utils/sanity-client';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  image: {
    domains: ['cdn.sanity.io'],
  },
  integrations: [
    react(),
    sanity(sanityConfig),
    tailwind({
      config: './tailwind.config.js',
      applyBaseStyles: true,
    }),
  ],
  server: {
    port: 3000,
  },
  experimental: {
    inlineStylesheets: "auto",
  },
});
