import { extend } from "umi-request";
import type { RequestOptionsInit } from "umi-request";

export enum ErrCodeEnum {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOTFOUND = 404,
  SERVERERROR = 500,
}

export const ERRORCODEMAP: { [key in ErrCodeEnum]: string } = {
  401: "未权限",
  403: "未权限",
  404: "服务未找到",
  500: "服务器操作",
};

const errorHandler = (error: any) => {
  console.log('eer', error);
};

const request = extend({
  prefix: "http://localhost:9527",
  errorHandler,
});

request.interceptors.request.use((url: string, options: RequestOptionsInit) => {
  console.log(url, options);
  return {}
});

request.interceptors.response.use((response) => {
  return response;
});

export default request;
