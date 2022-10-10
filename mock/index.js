// app.js
const Koa = require('koa')
const Module = require("./module");
const Mock = require('mockjs');

const app = new Koa();

const PORT = 9527;

// 处理跨域
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");

  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");

  ctx.set("Access-Control-Allow-Credentials", true);
  
  await next();
})

app.use(async (ctx, next) => {
  const path = ctx.path;
  const method = ctx.method;
  
  const requestKey = Object.keys(Module);

  const request = requestKey.find(item => `${method.toLocaleUpperCase()} ${path}` === item);

  if (request) {
    ctx.body = Mock.mock(Module[request])
  } else {
    ctx.status = 404;
  }
})

console.log(`Mock服务已启动，服务端口为${PORT}`);

app.listen(PORT)