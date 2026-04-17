import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["electron/main.ts", "electron/preload.ts"],
  outDir: ".dist/electron",
  format: ["cjs", "esm"],
  target: "node20",
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: false,
  external: ["electron"],
  noExternal: [],
  bundle: true,
});
