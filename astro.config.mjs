import { cp } from 'node:fs/promises';
import { defineConfig } from 'astro/config';

const preserveBrandUrls = {
  name: 'preserve-brand-urls',
  hooks: {
    // Previously published pages still refer to the root-level brand directory.
    'astro:build:done': ({ dir }) => cp(
      new URL('./src/assets/brand/', import.meta.url),
      new URL('./brand/', dir),
      { recursive: true },
    ),
  },
};

export default defineConfig({
  site: 'https://graphenepowerbd.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [preserveBrandUrls],
});
