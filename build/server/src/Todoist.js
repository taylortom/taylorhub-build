const fetch = require('node-fetch');

class Todoist {
  get api() {
    return [
      {
        route: '/shopping',
        handlers: { get: this.getShoppingHandler.bind(this) }
      },
      {
        route: '/tasks',
        handlers: { get: this.getTasksHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    this.config = config;
  }
  getList(listId) {
    return new Promise(async (resolve, reject) => {
      const url = `https://api.todoist.com/rest/v1/tasks?project_id=${listId}`;
      const response = await fetch(url, { headers: { 'Authorization': `Bearer ${this.config.todoistKey}` } });
      const data = await response.json();
      let returnData = [];
      for(let i = data.length-1; i >= 0; i--) {
        returnData.push(this.listItemMap(data[i]));
      }
      resolve(returnData);
    });
  }
  listItemMap(data) {
    return { name: `${data.content[0].toUpperCase()}${data.content.slice(1)}` };
  }
  async getShoppingHandler(req, res, next) {
    try {
      res.json(await this.getList(this.config.todoistShoppingId));
    } catch(e) {
      next(e);
    }
  }
  async getTasksHandler(req, res, next) {
    try {
      res.json(await this.getList(this.config.todoistTasksId));
    } catch(e) {
      next(e);
    }
  }
}

module.exports = Todoist;