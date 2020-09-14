const { exec } = require('child_process');

async function buildServer() {
  console.log('buildServer');
}

async function buildUI() {
  console.log('buildUI');
}

async function commit() {
  console.log('commit');
}

async function run() {
  console.log('Running build');
  await Promise.all([buildServer, buildUI]);
  await commit();
  console.log('done!');
}

run();