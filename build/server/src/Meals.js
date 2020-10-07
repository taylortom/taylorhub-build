const { promises: fs } = require('fs');
const moment = require('moment');

moment.updateLocale('en', { week: { dow: 1 } });

class Meals {
  get api() {
    return [
      {
        route: '/meals',
        handlers: { get: this.getMealsDataHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    this.config = config;
  }
  async getMealsDataHandler(req, res, next) {
    try {
      const dataBuf = await fs.readFile(`${__dirname}/../data/meals.json`);
      const data = JSON.parse(dataBuf.toString()).schedule;
      res.json(data[moment().week()%data.length]);
    } catch(e) {
      next(e);
    }
  }
}

module.exports = Meals;