import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '',
  server: {
    allowedHosts: ['ca263c6eb20e.ngrok-free.app'], // ✅ Allow the ngrok host
  },
})
