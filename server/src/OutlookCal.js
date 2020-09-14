const https = require('https');
const ical = require('ical.js');
const moment = require('moment');

class OutlookCal {
  get api() {
    return [
      {
        route: '/outlook',
        handlers: { get: this.getDataHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    this.config = config;
  }
  getData() {
    return new Promise((resolve, reject) => {
      https.get(this.config.calendarUrl, res => {
        let calData = '';
        res.on('data', d => calData += d);
        res.on('end', () => resolve(this.parseData(calData)));
      });
    });
  }
  parseData(data) {
    const now = new Date();
    return ical.parse(data)[2]
      .map(([type, attrs]) => {
        return type === 'vevent' ? new Event(attrs) : undefined;
      })
      .filter(e => e && e.end > now)
      .sort((a,b) => a < b);
  }
  async getDataHandler(req, res, next) {
    try {
      res.json({ events: await this.getData() });
    } catch(e) {
      next(e);
    }
  }
}

class Event {
  constructor(data) {
    const attrMap = {
      // 'description': 'description',
      'dtend': ['end', moment],
      'dtstart': ['start', moment],
      'location': ['location'],
      'status': ['status'],
      'summary': ['summary'],
      'x-microsoft-cdo-alldayevent': ['alldayevent', Boolean],
      'x-microsoft-cdo-busystatus': ['busystatus']
    };
    data.forEach(([attr,,,val]) => {
      try {
        const [key, Type] = attrMap[attr];
        this[key] = Type ? Type(val) : val;
      } catch {}
    });
  }
}

module.exports = OutlookCal;