import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/contactify',
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
});
