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
  getData() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`https://random-facts1.p.rapidapi.com/fact/random`, { 
          headers: { 
            'x-rapidapi-host': `random-facts1.p.rapidapi.com`,
            'x-rapidapi-key': this.config.rapidApiKey 
          }
        });
        resolve(response.json().contents.fact);
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