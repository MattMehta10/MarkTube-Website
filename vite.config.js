import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '',
  server: {
    allowedHosts: ['69e88db91af1.ngrok-free.app'], // ✅ Allow the ngrok host
  },
})
