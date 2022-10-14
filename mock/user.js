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

  "POST /api/auth/token": (ctx) => {
    ctx.body = Mock.mock({
      "code": 0,
      "data": {
        "access_token": "@guid()",
        "refresh_token": "@guid()",
        "expires_in": "@datetime('T')",
      },
      "msg": "success",
    })
  },

  "GET /api/user/profile": (ctx) => {
    ctx.body = Mock.mock({
      "code": 0,
    })
  }
};
