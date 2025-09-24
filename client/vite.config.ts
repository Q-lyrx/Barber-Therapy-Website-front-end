import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    minify: "esbuild",
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
        },
      },
    },
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: ["46796a2b-4f3d-404c-9f8b-a58e8c8bfb01-00-1i14uvyty3q84.spock.replit.dev"],
  },
  preview: {
    port: 3000,
    host: true,
  },
});