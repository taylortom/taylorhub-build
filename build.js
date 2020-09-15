const childProcess = require('child_process');
const fs = require('fs-extra');
const path = require('path');

async function exec(cmd, cwd) {
  return new Promise((resolve, reject) => childProcess.exec(cmd, { cwd }).on('error', reject).on('exit', resolve));
}

async function copyDir(src, dirname = path.basename(src)) {
  const excludes = [
    '.git',
    'node_modules'
  ];
  return fs.copy(src, path.resolve('./build', dirname), { filter: f => !excludes.includes(path.basename(f)) });
}
async function run() {
  const serverDir = path.resolve('../server');
  const uiDir = path.resolve('../ui');
  console.log('Running build');
  try {
    await exec(`npm run build`, uiDir);
    await copyDir(serverDir);
    await copyDir(`${uiDir}/build`, 'ui');
    await exec(`git commit -m "Update build from run script"`);
    console.log('done!');
  } catch (e) {
    console.log(e);
  }
}

run();