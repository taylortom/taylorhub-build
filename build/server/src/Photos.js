const path = require('path');
const SambaApi = require('./SambaApi');

class Photos extends SambaApi {
  get api() {
    return [
      {
        route: '/photos/:dir',
        handlers: { get: this.getPhotosHandler.bind(this) }
      },
      {
        route: '/photo/:file',
        handlers: { get: this.getPhotoHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    super(config);
    this.shareUrl += '\\public';
  }
  async getPhotosHandler(req, res, next) {
    try {
      res.json(await this.getDirContents(`photos\\${req.params.dir}`));
    } catch(e) {
      next(e);
    }
  }
  async getPhotoHandler(req, res, next) {
    try {
      const buf = await this.getFile(`photos\\${req.params.file}`);
      res.type(path.extname(req.params.file).slice(1));
      res.write(buf);
    } catch(e) {
      next(e);
    }
  }
}

module.exports = Photos;