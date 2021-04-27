const { promises: fs } = require('fs');

class Photos {
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
    this.photosDir = config.photosDir
  }
  async getPhotosHandler(req, res, next) {
    try {
      res.json(await fs.readdir(`${this.photosDir}/${req.params.dir}`));
    } catch(e) {
      next(e);
    }
  }
  async getPhotoHandler(req, res, next) {
    try {
      res.sendFile(`${this.photosDir}/${req.params.file}`);
    } catch(e) {
      next(e);
    }
  }
}

module.exports = Photos;