import { IntlProvider } from "react-intl";
import React from "react";
import zh_CN from "./locales/zh-CN";
import en_US from "./locales/en-US";

const localeMap: Record<string, any> = {
  "zh-CN": zh_CN,
  "en-US": en_US,
};

export const loadLocalMessage = (locale: string) => {
  const message = localeMap[locale];
  return {
    locale: message ? locale : "zh-CN",
    message: message || localeMap["zh-CN"],
  };
};

type Props = {
  children: React.ReactElement;
};

const LocalProvider: React.FC<Props> = ({ children }) => {
  const lang = loadLocalMessage("en-US");
  // const lang = loadLocalMessage(navigator.language);
  return (
    <IntlProvider locale={lang.locale} messages={lang.message}>
      {children}
    </IntlProvider>
  );
};

export default LocalProvider;
