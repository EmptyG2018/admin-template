module.exports = {
  "GET /api/error/system/401": (ctx) => {
    ctx.throw(401, 'name required: 401');
  },
  "GET /api/error/system/403": (ctx) => {
    ctx.throw(403);
  },
  "GET /api/error/system/404": (ctx) => {
    ctx.throw(404);
  },
  "GET /api/error/system/500": (ctx) => {
    ctx.throw(500);
  },
  "GET /api/error/401": (ctx) => {
    ctx.status = 401;
    ctx.body = { code: 401 };
  },
  "GET /api/error/403": (ctx) => {
    ctx.status = 403;
    ctx.body = { code: 403 };
  },
  "GET /api/error/404": (ctx) => {
    ctx.status = 404;
    ctx.body = { code: 404 };
  },
  "GET /api/error/500": (ctx) => {
    ctx.status = 500;
    ctx.body = { code: 500 };
  },
};
