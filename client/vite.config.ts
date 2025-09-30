import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',   // ✅ ensures correct asset paths on Netlify
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: ["46796a2b-4f3d-404c-9f8b-a58e8c8bfb01-00-1i14uvyty3q84.spock.replit.dev"],
  },
})
