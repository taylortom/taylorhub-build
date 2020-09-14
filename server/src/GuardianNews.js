const fetch = require('node-fetch');

class GuardianNews {
  get api() {
    return [
      {
        route: '/news',
        handlers: { get: this.getNewsHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    this.config = config;
  }
  async getNews() {
    const response = await fetch(`https://content.guardianapis.com/${this.config.guardianSearch}&page-size=10&api-key=${this.config.guardianKey}`);
    const data = await response.json();
    return data.response.results.map(d => {
      return {
        headline: d.webTitle,
        date: d.webPublicationDate,
        section: d.sectionName
      };
    });
  }
  async getNewsHandler(req, res, next) {
    try {
      res.json(await this.getNews());
    } catch(e) {
      next(e);
    }
  }
}

module.exports = GuardianNews;