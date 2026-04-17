/**
 * @Disabled
 *
 */
import { spawn, ChildProcess } from "child_process";
import os from "os";

const pnpm = os.platform() === "win32" ? "pnpm.cmd" : "pnpm";

let viteProcess: ChildProcess | null = null;
let tsupProcess: ChildProcess | null = null;
let electronProcess: ChildProcess | null = null;

function cleanup() {
  console.log("\nCleaning up processes...");
  viteProcess?.kill();
  tsupProcess?.kill();
  electronProcess?.kill();
  process.exit();
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

async function startDev() {
  console.log("Starting Development Environment...");
  viteProcess = spawn(pnpm, ["vite"], { shell: true });

  viteProcess.stdout?.on("data", (data) => {
    const output = data.toString();
    process.stdout.write(`[Vite] ${output}`);

    if (output.includes("localhost:") && !electronProcess) {
      console.log("Vite is ready, launching Electron...");
      startElectron();
    }
  });

  tsupProcess = spawn(pnpm, ["tsup --watch"], {
    shell: true,
    stdio: "inherit",
  });
}

function startElectron() {
  electronProcess = spawn(pnpm, ["electron ."], {
    shell: true,
    stdio: "inherit",
  });

  electronProcess.on("close", () => {
    console.log("Electron closed. Shutting down...");
    cleanup();
  });
}

startDev();
