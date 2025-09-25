#!/usr/bin/env node

import { spawn } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Change to client directory and start Vite dev server
const clientDir = join(__dirname, '..', 'client');

console.log('Starting Barber Therapy client development server...');

const viteProcess = spawn('npm', ['run', 'dev'], {
  cwd: clientDir,
  stdio: 'inherit',
  shell: true
});

viteProcess.on('close', (code) => {
  console.log(`Vite dev server exited with code ${code}`);
  process.exit(code || 0);
});

viteProcess.on('error', (error) => {
  console.error('Error starting Vite dev server:', error);
  process.exit(1);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\nShutting down development server...');
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\nShutting down development server...');
  viteProcess.kill('SIGTERM');
});