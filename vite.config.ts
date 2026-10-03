import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

/**
 * `base` relativo: o site é servido tanto em domínio raiz quanto em
 * usuario.github.io/portfolio/, e caminho absoluto quebraria no segundo.
 */
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  server: { port: 5174 },
});
