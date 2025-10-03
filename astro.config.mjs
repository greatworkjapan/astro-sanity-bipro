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
  // エラーの原因となっていた 'experimental' ブロックを削除しました
  // もしくは、無効な設定である 'inlineStylesheets: "auto"' のみ削除します。
  // 今回はエラーログの診断に基づき、ブロック全体を削除するのが最も確実です。
});
