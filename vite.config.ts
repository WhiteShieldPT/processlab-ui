import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");
const externalDeps = Array.from(
  new Set([
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
    "react/jsx-runtime",
  ]),
);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "src/processlab-ui/index.ts"),
      name: "ProcessLabUI",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: externalDeps,
    },
  },
});
