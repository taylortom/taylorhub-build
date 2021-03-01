const SambaApi = require('./SambaApi');

class Shopping extends SambaApi {
  get api() {
    return [
      {
        route: '/shopping',
        handlers: { get: (req, res, next) => this.getFile().then(l => res.json(l)).catch(e => next(e)) }
      }
    ];
  }
  constructor(config) {
    super(config);
    this.filename = '.shopping_list.json'
  }
}

module.exports = Shopping;