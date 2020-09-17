const { update, startup } = require('./utils');

async function boot() {
  try {
    await update();
    await startup();
  } catch(e) {
    console.log(e);
  }
}

boot();
