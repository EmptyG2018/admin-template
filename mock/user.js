const Mock = require("mockjs");

module.exports = {
  "GET /api/rule": (ctx) => {
    ctx.body = Mock.mock({
      "records|1-2": [
        {
          msg: "@ctitle(2)",
        },
      ],
    });
  },
};
