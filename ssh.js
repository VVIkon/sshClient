#!/usr/bin/node
const { spawn } = require('child_process');


const childProcess = spawn('ssh', [process.argv[2]], { stdio: [process.stdout, null,null] });

childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
});

childProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

childProcess.on('close', (code) => {
    console.log(`child process Close with code ${code}`);
});