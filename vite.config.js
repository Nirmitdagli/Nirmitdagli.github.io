import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a user page (nirmitdagli.github.io) the site is served from the root,
// so base is '/'. If you ever rename this to a project page, change to '/<repo>/'.
export default defineConfig({
  plugins: [
    react({
      // Allow JSX inside .js files (the spec puts the entry at src/index.js).
      include: '**/*.{js,jsx,ts,tsx}',
    }),
  ],
  base: '/',
  esbuild: {
    loader: 'jsx',
    include: [/src\/.*\.jsx?$/],
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
  server: {
    port: 5173,
    open: false,
  },
});
