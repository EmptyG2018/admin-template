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
      "data": {
        "avatar|1": [
          "https://www.meishujixun.com/uploads/e7100c372c5545a625fc6d095b2c4b54.jpg",
          "https://www.meishujixun.com/uploads/0eec83ad24d9e3dc7cb2ce08189b7cbd.jpg",
          "https://www.meishujixun.com/uploads/5394b3119524b974f48f534098135489.jpg",
          "https://www.meishujixun.com/uploads/8759ca6e4ee43015b2dc9195aa825135.jpg",
          "https://www.meishujixun.com/uploads/e1da67f647222b6f658e16b496354505.jpg",
          "https://www.meishujixun.com/uploads/d8dbb8e62e697566f9831debc220b978.jpg",
          "https://www.meishujixun.com/uploads/f1c8fcd894c3342821c13eed09d844cf.jpg"
        ],
        "userId": "@guid()",
        "userName": "@cname()",
        "nickName": "@name()",
        "email": "@email()",
        "phone": /136\d{8}/,
        "sex": "@integer(1,2)",
        "age": "@integer(10,100)",
        "locale|1": [
          "zh-CN",
          "zh-HK",
          "en-US",
        ],
        "roleId": function() {
          return this.roles[0].roleId;
        },
        "roles": [
          {
            "roleId": "@guid()",
            "roleName|1": [
              "系统管理员",
              "技术总监",
              "人事总监",
              "财务总监",
              "行政总监",
              "普通职员",
            ],
            "permissions": [
              "system.order.get",
              "system.order.add",
              "system.order.edit",
              "system.order.delete",
              "system.order.export",
            ]
          },
          {
            "roleId": "@guid()",
            "roleName|1": [
              "系统管理员",
              "技术总监",
              "人事总监",
              "财务总监",
              "行政总监",
              "普通职员",
            ],
            "permissions": [
              "system.order.get",
            ]
          }
        ]
      }
    })
  }
};
