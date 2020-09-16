const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('./utils');

const PORT = 5999;

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
    console.log('Done pull, installing dependencies');
    await exec(`npm i --production`, `${__dirname}/build/server`);
  } catch(e) {
    console.log(e);
  }
  console.log('Finished');
}

module.exports = run;
