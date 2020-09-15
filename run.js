const childProcess = require('child_process');
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs-extra');
const path = require('path');

const PORT = 5999;

async function exec(cmd, cwd) {
  return new Promise((resolve, reject) => childProcess.exec(cmd, { cwd, shell: '/bin/bash' }).on('error', reject).on('exit', resolve));
}

async function run() {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get('/', (req, res) => res.send('Nothing to see here.'));
  app.get('/payload', (req, res) => res.sendStatus(200));
  app.post('/payload', async (req, res) => {
    onHook(JSON.parse(req.body.payload));
    res.sendStatus(200);
  });

  app.listen(PORT);
}

async function onHook({ repository: { name: repoName } }) {
  console.log('Push detected, processing');
  try {
    await exec(`git pull -f`, __dirname);
    await exec(`npm i --production`, `${__dirname}/build/server`);
  } catch(e) {
    console.log(e);
  }
  console.log('Finished');
}

run().then(() => console.log(`App running on ${PORT}`)).catch(console.log);
