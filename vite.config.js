import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`, // Adjust the path to match your project structure
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Set up an alias for the src directory
    },
  },
});
