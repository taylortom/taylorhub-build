const bodyParser = require('body-parser');
const express = require('express');
const { update } = require('./utils');

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

function onHook({ repository: { name: repoName } }) {
  console.log('Push detected, processing');
  update().then(() => console.log('Finished')).catch(console.log);
}

module.exports = run;
