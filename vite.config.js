import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/saivineeth-portfolio/',  // Adjust based on deployment path
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // Prevents Vite from converting images to base64
  },
  resolve: {
    alias: {
      '@': '/src', // Makes importing assets easier
    },
  },
});
