import { defineConfig } from 'vite';

// GitHub Pages serves the repo under /<repo-name>/, so the base path must match
// the repository name. Override with BASE_PATH when deploying elsewhere.
export default defineConfig({
  base: process.env.BASE_PATH || '/Prototype/',
  build: {
    // Drop stale hashed assets between builds (both locally and in CI).
    emptyOutDir: true,
  },
  server: {
    host: true,
  },
});