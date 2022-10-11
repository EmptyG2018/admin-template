
declare type ResponseOk = {
  code: number;
  msg: string;
};

type ResponseData<T = any> = ResponseOk & {
  data: T;
};


declare namespace ARG {
}

declare namespace API {

}
