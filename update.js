const { exec } = require('utils');

async function update() {
  await exec('git reset --hard');
  await exec('git pull');
  await exec('node build/server/startup');
}

module.exports = update;
