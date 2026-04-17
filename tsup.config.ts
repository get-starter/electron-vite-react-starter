import { defineConfig } from "tsup";
import { spawn, execSync, type ChildProcess } from "node:child_process";

let appProcess: ChildProcess | null = null;
const isDev = process.env.npm_lifecycle_event?.includes("dev") || process.argv.includes("--watch");

export default defineConfig({
  entry: ["electron/main.ts", "electron/preload.ts"],
  outDir: ".dist/electron",
  format: ["esm"],
  target: "node20",
  clean: true,
  bundle: true,
  external: ["electron"],
  minify: !isDev,
  treeshake: !isDev,
  shims: true,
  ignoreWatch: ["**/.dist/**", "**/node_modules/**", "**/*.log"],
  async onSuccess() {
    if (!isDev) return;

    if (appProcess) {
      appProcess.removeAllListeners();
      appProcess.kill("SIGTERM");
      appProcess = null;
    }

    try {
      if (process.platform === "win32") {
        execSync("taskkill /f /im electron.exe /t 2>nul || exit 0");
      } else {
        execSync("pkill -f electron || true");
      }
    } catch (e) {}

    const electronPath = process.platform === "win32" ? "electron.cmd" : "electron";

    appProcess = spawn(electronPath, ["."], {
      stdio: "inherit",
      env: process.env,
      shell: process.platform === "win32",
    });

    appProcess.on("exit", () => {
      appProcess = null;
    });
  },
});
