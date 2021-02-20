const moment = require('moment');

class BinDay {
  get api() {
    return [
      {
        route: '/binday',
        handlers: { get: (req, res) => res.json(moment().week()%2 ? 1 : 0) }
      }
    ];
  }
}

module.exports = BinDay;