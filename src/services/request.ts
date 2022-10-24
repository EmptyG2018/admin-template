import { extend } from "umi-request";
import type { RequestOptionsInit } from "umi-request";
import { message } from "antd";

export enum ErrCodeEnum {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOTFOUND = 404,
  SERVERERROR = 500,
}

export const ERRORCODEMAP: { [key: number]: string } = {
  401: "未授权",
  403: "拒绝访问",
  404: "服务未找到",
  500: "服务器错误",
};

const errorHandler = (error: any) => {
  if (error.response) {
    // 请求已发送但服务端返回状态码非 2xx 的响应
    console.log("status:", error.response.status);
    console.log("headers:", error.response.headers);
    console.log("data:", error.data);

    message.error({
      key: "request error 2",
      content: ERRORCODEMAP[error.response.status] || ERRORCODEMAP[500],
    });
  } else {
    // 请求初始化时出错或者没有响应返回的异常
    console.log("error：", error.message);

    message.error({
      key: "request error 1",
      content: error.message,
    });
  }

  throw error; // 如果throw. 错误将继续抛出.

  // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
  // return {some: 'data'};
};

const request = extend({
  prefix: 'http://127.0.0.1:9527',
  errorHandler,
});

request.interceptors.request.use((url: string, options: RequestOptionsInit) => {
  return {};
});

request.interceptors.response.use((response) => {
  return response;
});

export default request;
