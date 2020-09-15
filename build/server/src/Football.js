const fetch = require('node-fetch');

class Football {
  get api() {
    return [
      {
        route: '/football',
        handlers: { get: this.getDataHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    this.config = config;
    this.cachedData = [];
    this.fetchInterval = this.config.footballUpdateInterval;
    this.lastFetch = new Date('1/1/1970');
  }
  get shouldReturnCached() {
    return this.cachedData.length && this.lastFetch.getTime() + this.fetchInterval <= Date.now();
  }
  getData() {
    if (this.shouldReturnCached) {
      return Promise.resolve(this.cachedData);
    }
    return new Promise(async (resolve, reject) => {
      try {
        const results = await Promise.all([`fixtures/team/46/last/1`, `fixtures/team/46/next/2`].map(async url => {
          const response = await fetch(`https://api-football-v1.p.rapidapi.com/v2/${url}`, { 
            headers: { 
              'x-rapidapi-host': `api-football-v1.p.rapidapi.com`,
              'x-rapidapi-key': `a4c5d43a4cmshe7a9661b20bdf28p11813fjsnc15b37b4823a` 
            } 
          });
          return response.json();
        }));
        this.cachedData = [...results[0].api.fixtures, ...results[1].api.fixtures].map(this.itemMap, this);
        resolve(this.cachedData);
      } catch(e) {
        reject(e);
      }
    });
  }
  itemMap({ awayTeam, event_date, goalsAwayTeam, goalsHomeTeam, homeTeam, league, venue }) {
    return { 
      awayTeam: { name: awayTeam.team_name, logo: awayTeam.logo },
      date: event_date,
      homeTeam: { name: homeTeam.team_name, logo: homeTeam.logo },
      league: { name: league.name, logo: league.logo },
      score: [goalsHomeTeam, goalsAwayTeam],
      venue
    };
  }
  async getDataHandler(req, res, next) {
    try {
      res.json(await this.getData());
    } catch(e) {
      next(e);
    }
  }
}

module.exports = Football;