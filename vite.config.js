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
  // Ensure React is singleton — reactflow (and any future dep) must share the
  // same React instance as the app. Without this Vite pre-bundles a second
  // copy of React, causing "Invalid hook call" inside ReactFlowWrapper.
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  esbuild: {
    loader: 'jsx',
    include: [/src\/.*\.jsx?$/],
    exclude: [],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'reactflow'],
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
