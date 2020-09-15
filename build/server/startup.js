const { exec } = require('child_process');
const Server = require('./src/server');

const config = require('../config');

async function startup() {
  const server = new Server(config);
  await server.init();
}

startup();