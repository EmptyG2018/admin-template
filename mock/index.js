// app.js
const Koa = require("koa");
const Module = require("./module");

const app = new Koa();

const PORT = 9527;

// 处理跨域
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");

  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

  ctx.set(
    "Access-Control-Allow-Headers",
    "x-requested-with, accept, origin, content-type"
  );


  await next();
});

app.use(async (ctx) => {
  const path = ctx.path;
  const method = ctx.method;

  const requestKey = Object.keys(Module);

  const request = requestKey.find(
    (item) => `${method.toLocaleUpperCase()} ${path}` === item
  );

  if (request) {
    Module[request](ctx);
  } else {
    ctx.status = 500;
  }
});

console.log(`Mock服务已启动，服务端口为${PORT}`);

app.listen(PORT);
