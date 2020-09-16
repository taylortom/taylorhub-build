const update = require('./update');
const run = require('./run');

async function boot() {
  try {
    await update();
    await run();
  } catch(e) {
    console.log(e);
  }
}

