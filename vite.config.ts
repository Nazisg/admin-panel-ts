import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      shared: "/src/shared",
      componets: "/src/shared/components",
    },
  },
  server: {
    port: 3000,
  },
});
