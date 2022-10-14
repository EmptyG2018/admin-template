
declare type ResponseOk = {
  code: number;
};

type ResponseData<T = any> = ResponseOk & {
  data: T;
};


declare namespace ARG {
  type GetToken = {
    username: string;
    password: string;
  }
}

declare namespace API {
  type GetToken = ResponseData<{
    access_token: string;
    refresh_token: string;
    expires_in: number;
  }>
}
