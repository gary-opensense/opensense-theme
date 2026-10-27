import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site from /<repo-name>/; the deploy workflow sets BASE_PATH.
  base: process.env.BASE_PATH ?? '/',
  plugins: [tailwindcss(), svelte()],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
    },
  },
})
