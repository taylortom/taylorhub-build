const fetch = require('node-fetch');

class Fact {
  get api() {
    return [
      {
        route: '/fact',
        handlers: { get: this.getDataHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    this.config = config;
  }
  getData() {
    return new Promise(async (resolve, reject) => {
      if(this.cachedData) {
        return resolve(this.cachedData);
      }
      try {
        const response = await fetch(`https://random-facts1.p.rapidapi.com/fact/random`, { 
          headers: { 
            'x-rapidapi-host': `random-facts1.p.rapidapi.com`,
            'x-rapidapi-key': this.config.rapidApiKey 
          }
        });
        this.cachedData = (await response.json()).contents.fact;
        resolve(this.cachedData);
      } catch(e) {
        reject(e);
      }
    });
  }
  async getDataHandler(req, res, next) {
    try {
      res.json(await this.getData());
    } catch(e) {
      next(e);
    }
  }
}

module.exports = Fact;