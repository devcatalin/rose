import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/assets': path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
