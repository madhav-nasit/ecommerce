import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  resolve: {
    alias: {
      src: '/src',
      api: '/src/api',
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      contexts: '/src/contexts',
      hooks: '/src/hooks',
      pages: '/src/pages',
      queries: '/src/queries',
      routers: '/src/routers',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
});
