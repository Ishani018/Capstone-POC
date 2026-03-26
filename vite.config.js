import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/vt-api': {
        target: 'https://www.virustotal.com/api/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/vt-api/, ''),
      },
      '/ollama-api': {
        target: 'http://localhost:11434/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ollama-api/, ''),
      }
    }
  }
});
