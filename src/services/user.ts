import request from "./request";

export const GetSystemError = () => {
  return request("/api/error/system/401", {
    method: "GET",
  });
};

export const GetError = () => {
  return request("/api/error/401", {
    method: "GET",
  });
};

export const GetToken = (params: ARG.GetToken) => {
  return request<API.GetToken>("/api/auth/token", {
    method: "POST",
    data: params,
  });
};

export const GetProfile = () => {
  return request<API.GetProfile>("/api/user/profile", {
    method: "GET",
  });
};
