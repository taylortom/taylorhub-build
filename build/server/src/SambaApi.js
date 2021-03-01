const smb2 = require('smb2');

class SambaApi {
  constructor(config) {
    this.config = config;
    this.filename = undefined;
  }
  getFile() {
    if(!this.filename) {
      return Promise.reject('SambaApi#getFile: Must specify a filename');
    }
    return new Promise(async (resolve, reject) => {
      const share = new smb2({ 
        share: this.config.sambaShareUrl,
        domain: 'WORKGROUP',
        username: this.config.sambaUsername,
        password: this.config.sambaPassword
      });
      share.readFile(this.filename, (error, data) => {
        if(error) {
          return reject(error);
        }
        try {
          resolve(JSON.parse(data.toString()));
        } catch(e) {
         reject(e);
        }
      });
    });
  }
}

module.exports = SambaApi;