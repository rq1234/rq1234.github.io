import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // IMPORTANT for root GitHub Pages site (rq1234.github.io)
  base: "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});


