import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/saivineeth-portfolio/", // Use correct deployment path
  build: {
    assetsDir: "assets", // Ensures images are correctly placed in the build
  },
});
