// app.js
const Koa = require("koa");
const Cors = require('@koa/cors')
const Module = require("./module");

const app = new Koa();

const PORT = 9527;

app.use(Cors());

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
