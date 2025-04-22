import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/saivineeth-portfolio/", // Ensure this matches your Render deployment path
  build: {
    outDir: "dist", // Ensure build outputs to the correct folder
  },
  server: {
    port: 3000, // Optional: Set local dev server port
  }
});
