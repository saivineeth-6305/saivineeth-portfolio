import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/saivineeth-portfolio/', // Replace with your exact repository name
});
