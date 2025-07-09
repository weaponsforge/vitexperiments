import path from 'path'

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

const VITE_PUBLIC_BASE_PATH = process.env.VITE_PUBLIC_BASE_PATH

// https://vite.dev/config/
export default defineConfig({
  base: VITE_PUBLIC_BASE_PATH || '/',

  plugins: [
    react(),
    tailwindcss()
  ],

  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.test.tsx'],
    setupFiles: './src/lib/config/setupTests.ts'
  },

  server: {
    host: 'localhost',
    port: 3000,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
