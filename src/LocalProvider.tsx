import { IntlProvider } from "react-intl";
import React from "react";
import zh_CN from "./locales/zh-CN";
import en_US from "./locales/en-US";

type Props = {
  children: React.ReactElement;
};

const LocalProvider: React.FC<Props> = ({ children }) => {
  return <IntlProvider locale='en-US' messages={en_US}>{children}</IntlProvider>;
};

export default LocalProvider;
