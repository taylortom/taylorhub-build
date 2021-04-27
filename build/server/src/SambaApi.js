const smb2 = require('smb2');

class SambaApi {
  constructor(config) {
    this.config = config;
    this.shareUrl = config.sambaShareUrl;
  }
  get share() {
    if(!this.__share) {
      this.__share = new smb2({ 
        share: this.shareUrl,
        domain: 'WORKGROUP',
        username: this.config.sambaUsername,
        password: this.config.sambaPassword,
        autoCloseTimeout: 0
      });
    }
    return this.__share;
  }
  getFile(filename, parse=false) {
    return new Promise(async (resolve, reject) => {
      this.share.readFile(filename, (error, data) => {
        if(error) {
          console.log(filename, parse);
          return reject(error);
        }
        if(!parse) return resolve(data);
        try {
          resolve(JSON.parse(data.toString()));
        } catch(e) {
         reject(e);
        }
      });
    });
  }
  getDirContents(dir) {
    if(!dir) {
      return Promise.reject('SambaApi#getDirContents: Must specify a dir');
    }
    return new Promise(async (resolve, reject) => {
      this.share.readdir(dir, (error, data) => {
        if(error) {
          return reject(error);
        }
        try {
          resolve(data);
        } catch(e) {
         reject(e);
        }
      });
    });
  }
}

module.exports = SambaApi;