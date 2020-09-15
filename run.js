const childProcess = require('child_process');
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs-extra');
const path = require('path');

async function exec(cmd, cwd) {
  return new Promise((resolve, reject) => childProcess.exec(cmd, { cwd }).on('error', reject).on('exit', resolve));
}

async function run() {
  const app = express();

  app.use(
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json()
  );

  app.get('/', (req, res) => res.sendFile(__dirname + '/index.htm'));
  app.get('/payload', (req, res) => res.sendStatus(200));
  app.post('/payload', async (req, res) => {
    const dir = `~/Projects/taylorhub-build/builds/${Date.now()}`;
    const repo = 'taylortom/taylorhub-build';
    console.log(`${req.body.pusher.name} just pushed to ${req.body.repository.name}`);
    await exec(`git -C ${dir} reset --hard`);
    await exec(`git -C ${dir} pull -f`);
    await exec(`npm -C ${dir}/server install --production`);
  });

  app.listen(5999);
}

run();