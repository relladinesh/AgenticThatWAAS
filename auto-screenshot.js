import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Allowed to run on Vercel now.

console.log("🚀 Starting background Vite server for automated screenshots...");

const isWindows = /^win/.test(process.platform);
const npxCmd = isWindows ? 'npx.cmd' : 'npx';
const nodeCmd = isWindows ? 'node.exe' : 'node';

const viteProcess = spawn(npxCmd, ['vite', '--port', '5173'], {
  stdio: 'ignore',
  cwd: __dirname,
  shell: true
});

// Give Vite 4 seconds to spin up before running screenshots
setTimeout(() => {
  console.log("📸 Running screenshot generator...");
  const screenshotProcess = spawn(nodeCmd, ['generate-screenshots.js'], {
    stdio: 'inherit',
    cwd: __dirname,
    shell: true
  });

  screenshotProcess.on('close', (code) => {
    console.log("🛑 Shutting down background Vite server...");
    viteProcess.kill();
    process.exit(code);
  });
}, 4000);
