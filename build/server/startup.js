const { exec } = require('child_process');
const path = require('path');
const Server = require('./src/server');

const config = require(path.resolve(__dirname, '../config'));

async function startup() {
  console.log(path.resolve(__dirname, '../config'));
  const server = new Server(config);
  await server.init();
}

startup();
