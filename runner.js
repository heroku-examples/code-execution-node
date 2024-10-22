#!/usr/bin/env node

const { Buffer } = require('buffer');
const process = require('process');

if (process.argv.length < 3) {
  console.log('No code to run');
  process.exit(1);
}

const base64EncodedCode = process.argv[2];
let decodedCode;

try {
  decodedCode = Buffer.from(base64EncodedCode, 'base64').toString('utf8');
} catch (e) {
  console.log('Error encountered running code');
  process.exit(1);
}

// Node.js's Buffer.from with 'base64' encoding can throw errors if invalid base64 is provided
if (decodedCode === '') {
  console.log('Error encountered running code');
  process.exit(1);
}

try {
  eval(decodedCode);
} catch (e) {
  console.log('Error encountered running code');
  process.exit(1);
}
