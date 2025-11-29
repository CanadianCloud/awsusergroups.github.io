import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For custom domain (awsusergroups.com)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true, // Auto-open browser on dev server start
  },
  preview: {
    port: 4173,
    open: true, // Auto-open browser on preview
  },
})
