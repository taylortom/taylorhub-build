const express = require('express');
const { promises: fs } = require('fs');

const Football = require('./Football');
const GitHub = require('./GitHub');
const GoogleCal = require('./GoogleCal');
const GuardianNews = require('./GuardianNews');
const Meals = require('./Meals');
const OpenWeatherMap = require('./OpenWeatherMap');
const OutlookCal = require('./OutlookCal');
const Todoist = require('./Todoist');
const Twitter = require('./Twitter');

class Server {
  constructor(config) {
    this.config = config;
    this.apis = [
      Football,
      GitHub,
      GoogleCal,
      GuardianNews,
      Meals,
      OpenWeatherMap,
      OutlookCal,
      Todoist,
      Twitter
    ];
    this.routes = [];
  }
  async init() {
    this.app = express();

    await fs.stat(this.config.buildDir);
    
    this.app.use(express.static(this.config.buildDir));
    this.app.use('/meals', express.static('/home/tom/Projects/taylorhub/mealeditor/build'));
    
    await this.initApis();

    this.app.listen(this.config.serverPort, console.log(`taylorhub API listening on ${this.config.serverPort}`));
  }
  async initApis() {
    this.apis.forEach(ApiClass => {
      const instance = new ApiClass(this.config);
      instance.api.forEach(({ route, handlers }) => {
        Object.entries(handlers).forEach(([method, handler]) => {
          this.app[method](`/api${route}`, handler);
          console.log(`Added ${method} /api${route}`);
        });
      });
    });
  }
}

module.exports = Server;
