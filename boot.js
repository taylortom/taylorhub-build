const update = require('./update');
const { exec } = require('./utils');

async function boot() {
  try {
    await update();
    await exec('node build/server/startup');
  } catch(e) {
    console.log(e);
  }
}

