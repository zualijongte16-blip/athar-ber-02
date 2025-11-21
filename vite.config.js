import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true, // ✅ Yes, this is correct!
  },
  plugins: [
    react(),
  ],
})
