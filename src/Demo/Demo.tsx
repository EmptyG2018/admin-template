import { GetSystemError, GetError } from "../services/user";
import { useRequest } from "ahooks";
import React from "react";

const Demo: React.FC = () => {
  useRequest(GetSystemError);
  useRequest(GetError);

  return <div>this is Demo.</div>;
};

export default Demo;
