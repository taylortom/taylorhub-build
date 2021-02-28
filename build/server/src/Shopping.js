const smb2 = require('smb2');

class Shopping {
  get api() {
    return [
      {
        route: '/shopping',
        handlers: { get: (req, res, next) => this.getList().then(l => res.json(l)).catch(e => next(e)) }
      }
    ];
  }
  constructor(config) {
    this.config = config;
  }
  getList() {
    return new Promise(async (resolve, reject) => {
      const share = new smb2({ 
        share: this.config.shoppingShareUrl,
        domain: 'WORKGROUP',
        username: this.config.shoppingUsername,
        password: this.config.shoppingPassword
      });
      share.readFile('.shopping_list.json', (error, data) => {
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

module.exports = Shopping;