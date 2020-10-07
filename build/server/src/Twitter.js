const fetch = require('node-fetch');

class Twitter {
  get api() {
    return [
      {
        route: '/twitter/:list',
        handlers: { get: this.getDataHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    this.config = config;
  }
  getList(list) {
    return new Promise(async (resolve, reject) => {
      const listId = this.config.twitterLists[list];
      const url = `https://api.twitter.com/1.1/lists/statuses.json?list_id=${listId}`;
      try {
        const response = await fetch(url, { headers: { 'Authorization': `Bearer ${this.config.twitterToken}` } });
        const json = await response.json();
        if(response.status > 399 && response.status < 499) {
          return reject(new Error(json.errors[0].message)); 
        }
        resolve(json.map(this.listItemMap, this));
      } catch(e) {
        reject(e);
      }
    });
  }
  listItemMap({ createdAt, text, user: { name: username } }) {
    return { 
      text: this.removeLinks(text),
      createdAt,
      user: username
    };
  }
  removeLinks(s) {
    return s.replace(/\shttps?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g, '');
  }
  async getDataHandler(req, res, next) {
    try {
      res.json(await this.getList(req.params.list));
    } catch(e) {
      next(e);
    }
  }
}

module.exports = Twitter;
