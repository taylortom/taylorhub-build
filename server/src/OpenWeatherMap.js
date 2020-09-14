const fetch = require('node-fetch');

class OpenWeatherMap {
  get api() {
    return [
      {
        route: '/weather',
        handlers: { get: this.getWeatherHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    this.config = config;
  }
  async getWeather() {
    const { openWeatherMapLat: lat, openWeatherMapLon: lon, openWeatherMapKey: key } = this.config;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`);
    const { list, city: { sunrise, sunset } } = await response.json();
    return {
      weather: list.slice(0,5).map(d => {
        return {
          time: d.dt_txt,
          summary: d.weather[0].main,
          description: d.weather[0].description,
          tempMain: d.main.temp,
          tempFeel: d.main.feels_like,
          icon: `http://openweathermap.org/img/wn/${d.weather[0].icon}.png`
        };
      }),
      sun: { rise: sunrise, set: sunset }
    };
  }
  async getWeatherHandler(req, res, next) {
    try {
      res.json(await this.getWeather());
    } catch(e) {
      next(e);
    }
  }
}

module.exports = OpenWeatherMap;