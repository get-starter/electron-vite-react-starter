import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(async () => {
  return {
    plugins: [react()],
    base: "./",
    build: {
      outDir: ".dist/app",
      emptyOutDir: true,
    },
    preview: { port: 5173 },
  };
});
