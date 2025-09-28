import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default defineConfig({
  base: "/",
  assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
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
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        manualChunks(id) {
          // Vendor chunk for core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'vendor';
          }
          // UI components chunk for Radix UI
          if (id.includes('@radix-ui')) {
            return 'ui-components';
          }
          // Router and form libraries
          if (id.includes('wouter') || id.includes('react-hook-form') || id.includes('zod')) {
            return 'utils';
          }
          // Icons and animations
          if (id.includes('lucide-react') || id.includes('react-icons') || id.includes('framer-motion')) {
            return 'icons-animations';
          }
          // CSS and styling libraries
          if (id.includes('tailwind') || id.includes('clsx') || id.includes('class-variance-authority')) {
            return 'styles';
          }
          // Split node_modules into vendor chunks by size/importance
          if (id.includes('node_modules')) {
            return 'vendor-misc';
          }
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