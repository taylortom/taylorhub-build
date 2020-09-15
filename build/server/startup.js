const { exec } = require('child_process');
const path = require('path');
const Server = require('./src/server');

const config = require(path.resolve(__dirname, '../config'));

async function startup() {
  const server = new Server(config);
  await server.init();
}

startup();