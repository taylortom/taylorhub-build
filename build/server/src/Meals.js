const moment = require('moment');
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
  }
  async getMealsDataHandler(req, res, next) {
    try {
      const data = (await this.getFile('.meals.json', true)).schedule;
      const week = moment().week() + Number(req.query.w || 0);
      res.json(data[week%data.length]);
    } catch(e) {
      next(e);
    }
  }
}

module.exports = Meals;