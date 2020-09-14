const { promises: fs } = require('fs');
const readline = require('readline');
const { google } = require('googleapis');


class GoogleCal {
  get api() {
    return [
      {
        route: '/events',
        handlers: { get: this.getEventsHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    this.config = config;
    this.tokenPath = `${this.config.rootDir}/token.json`;
    this.authorise();
  }
  async authorise() {
    this.auth = new google.auth.OAuth2(this.config.googleClientId, this.config.googleClientSecret, "urn:ietf:wg:oauth:2.0:oob");
    try {
      const token = await fs.readFile(this.tokenPath);
      this.auth.setCredentials(JSON.parse(token));
    } catch(e) {
      await this.getAccessToken();
    }
  }
  getAccessToken() {
    return new Promise(async (resolve, reject) => {
      console.log('Authorize taylorhub by visiting this url:', this.authUrl);
      const code = await this.getUserInput('Enter the code from that page here: ');
      this.auth.getToken(code, async (error, token) => {
        if(error) return reject(error);
        this.auth.setCredentials(token);
        fs.writeFile(this.tokenPath, JSON.stringify(token)).then(resolve, reject);
      });
    });
  }
  getUserInput(text) {
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
      rl.question(text, response => {
        rl.close();
        resolve(response);
      });
    });
  }
  get authUrl() {
    return this.auth.generateAuthUrl({ access_type: 'offline', scope: this.config.googleScopes });
  }
  getEvents(options = { calendar: 'primary', results: 25, sort: 'startTime' }) {
    return new Promise((resolve, reject) => {
      google.calendar({ version: 'v3', auth: this.auth })
        .events.list({
          calendarId: options.calendar,
          timeMin: (new Date()).toISOString(),
          maxResults: options.results,
          singleEvents: true,
          orderBy: options.sort,
        }, (error, res) => {
          if(error) return reject(error);
          resolve(res.data.items);
        });
    });
  }
  async getEventsHandler(req, res, next) {
    try {
      res.json(await this.getEvents());
    } catch(e) {
      next(e);
    }
  }
}

module.exports = GoogleCal;