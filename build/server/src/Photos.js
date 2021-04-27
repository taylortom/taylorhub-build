const { promises: fs } = require('fs');
const path = require('path');

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
  async getPhotosHandler(req, res, next) {
    try {
      res.json(await fs.readdir(`/home/pi/photos/${req.params.dir}`));
    } catch(e) {
      next(e);
    }
  }
  async getPhotoHandler(req, res, next) {
    try {
      res.sendFile(`/home/pi/photos/${req.params.file}`);
    } catch(e) {
      next(e);
    }
  }
}

module.exports = Photos;