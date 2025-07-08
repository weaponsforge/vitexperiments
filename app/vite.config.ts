import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

console.log('---base path', process.env.VITE_PUBLIC_BASE_PATH)
const VITE_PUBLIC_BASE_PATH = process.env.VITE_PUBLIC_BASE_PATH

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  ...(VITE_PUBLIC_BASE_PATH && { base: VITE_PUBLIC_BASE_PATH }),

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
