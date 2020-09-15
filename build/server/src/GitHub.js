const { graphql } = require("@octokit/graphql");

const queries = {
  stats: `{ 
    viewer {
      contributionsCollection { contributionCalendar { totalContributions } } 
      location
      login
      status { emojiHTML message }
    }
  }`,
  issues: `{ 
    viewer {
      issues(filterBy: {assignee: "taylortom"}, first: 50, orderBy: {field: UPDATED_AT, direction: DESC}) {
        edges {
          node {
            author { login }
            number
            publishedAt
            repository { name owner { login } }
            title
            updatedAt
            url
          }
        }
        totalCount
      }
    }
  }`
};
const transforms = {
  stats: ({ viewer }) => {
    return {
      ...viewer,
      contributionsCollection: null,
      contributions: viewer.contributionsCollection.contributionCalendar.totalContributions
    };
  },
  issues: ({ viewer: { issues: { edges, totalCount } } }) => {
    return {
      issues: edges.map(({ node }) => {
        return {
          author: node.author.login,
          number: node.number,
          publishedAt: new Date(node.publishedAt),
          repository: `${node.repository.owner.login}/${node.repository.name}`,
          title: node.title,
          updatedAt: new Date(node.updatedAt),
          url: node.url
        };
      }),
      totalCount
    }
  }
};

class GitHub {
  get api() {
    return [
      {
        route: '/github/:type',
        handlers: { get: this.getDataHandler.bind(this) }
      }
    ];
  }
  constructor(config) {
    this.config = config;
  }
  getData(query) {
    return graphql(query, { headers: { authorization: `token ${this.config.gitHubToken}` } });
  }
  async getDataHandler(req, res, next) {
    try {
      const query = queries[req.params.type];
      if(!query) {
        return res.status(404).end();
      }
      let data = await this.getData(query);
      
      const transform = transforms[req.params.type];
      if(transform) data = transform(data);
      
      res.json(data);
    } catch(e) {
      next(e);
    }
  }
}

module.exports = GitHub;