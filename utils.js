const { exec: cpExec } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

async function exec(cmd, cwd) {
  return new Promise((resolve, reject) => cpExec(cmd, { cwd }, e => e && reject(e) || resolve()));
}

async function copyDir(src, dirname = path.basename(src)) {
  const excludes = [
    '.git',
    'node_modules'
  ];
  return fs.copy(src, path.resolve('./build', dirname), { filter: f => !excludes.includes(path.basename(f)) });
}

async function build(shouldCommit = true) {
  const serverDir = path.resolve('../server');
  const uiDir = path.resolve('../ui');
  console.log('Running build');
  try {
    await exec(`npm run build`, uiDir);
    await copyDir(serverDir);
    await copyDir(`${uiDir}/build`, 'ui');
    if(shouldCommit) {
      await exec(`git stage -A`);
      await exec(`git commit -m "Update build from run script"`);
      await exec(`git push`);
    }
    console.log('done!');
  } catch (e) {
    console.log('Build failed');
    console.log(e);
  }
}

async function update() {
  await exec('git reset --hard');
  await exec('git pull');
  await exec(`${process.env.NPM_BIN || 'npm'} i --production`, 'build/server');
}

async function startup() {
  console.log(`Using node binary at ${process.env.NODE_BIN}`);
  return exec(`${process.env.NODE_BIN || 'node'} build/server/startup`);
}

module.exports = { build, copyDir, exec, update, startup };