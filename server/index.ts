import { spawn } from 'child_process';
import path from 'path';

// Simple wrapper to start the client dev server
const clientPath = path.resolve(process.cwd(), 'client');

console.log('Starting Barber Therapy client development server...');

const clientProcess = spawn('npm', ['run', 'dev'], {
  cwd: clientPath,
  stdio: 'inherit',
  shell: true
});

clientProcess.on('error', (error) => {
  console.error('Failed to start client:', error);
  process.exit(1);
});

clientProcess.on('close', (code) => {
  console.log(`Client process exited with code ${code}`);
  process.exit(code || 0);
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
  console.log('Shutting down...');
  clientProcess.kill();
});

process.on('SIGINT', () => {
  console.log('Shutting down...');
  clientProcess.kill();
});