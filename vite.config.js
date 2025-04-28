import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
build: {
  outDir: 'dist'
},
base: '/saivineeth-portfolio/', // Replace with your exact repository name
});
