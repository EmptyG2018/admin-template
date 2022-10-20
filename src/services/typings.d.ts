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
  };
}

declare namespace API {
  type GetToken = ResponseData<{
    access_token: string;
    refresh_token: string;
    expires_in: number;
  }>;

  type RoleItem = {
    roleId: string;
    roleName: string;
    permissions: string[];
  };

  type UserInfoItem = {
    avatar: string;
    userId: string;
    userName: string;
    nickName: string;
    email: string;
    phone: string;
    sex: 1 | 2;
    age: number;
    locale: string;
    roleId: string;
    roles: RoleItem[];
  };

  type GetProfile = ResponseData<UserInfoItem>;
}
