import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/StanislavMorozan-Portfolio/',
  plugins: [react()],
  build: {
    outDir: 'build', // If you changed this according to previous steps, keep it. Otherwise, it defaults to 'dist'
  },
});
