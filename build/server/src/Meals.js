const moment = require('moment');
const Mqtt = require('./Mqtt');
const SambaApi = require('./SambaApi');

moment.updateLocale('en', { week: { dow: 1 } });

class Meals extends SambaApi {
  get api() {
    return [
      {
        route: '/meals',
        handlers: { get: this.getMealsDataHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    super(config);
    this.shareUrl += '\\config';
    this.mqtt = new Mqtt(config);
    setInterval(this.updateData.bind(this), 1000*60*60);
    this.updateData();
  }
  async updateData() {
    try {
      this.data = (await this.getFile('.meals.json', true)).schedule;
      const day = moment().day();
      const week = moment().week();
      this.mqtt.publish("meals", JSON.stringify(this.data[week%this.data.length][day]));
    } catch(e) {
      console.log(e);
    }
  }
  async getMealsDataHandler(req, res, next) {
    try {
      const week = moment().week() + Number(req.query.w || 0);
      res.json(this.data[week%data.length]);
    } catch(e) {
      next(e);
    }
  }
}

module.exports = Meals;