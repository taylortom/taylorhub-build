const SambaApi = require('./SambaApi');

class Shopping extends SambaApi {
  get api() {
    return [
      {
        route: '/shopping',
        handlers: { get: this.getItemDataHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    super(config);
    this.shareUrl += '\\config';
  }
  async getItemDataHandler(req, res, next) {
    try {
      res.json((await this.getFile('.shopping_list.json', true)).filter(i => !i.complete));
    } catch(e) {
      next(e);
    }
  }
}

module.exports = Shopping;