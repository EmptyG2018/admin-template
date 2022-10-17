import { IntlProvider } from "react-intl";
import React from "react";
import { localeMap } from "./locales";

export const loadLocalMessage = (locale: string) => {
  const localeItem = localeMap[locale];

  return {
    locale: localeItem ? locale : "zh-CN",
    message: localeItem.message || localeMap["zh-CN"].message,
  };
};

type Props = {
  children: React.ReactElement;
};

const LocalProvider: React.FC<Props> = ({ children }) => {
  const lang = loadLocalMessage("zh-HK");

  // const lang = loadLocalMessage(navigator.language);
  return (
    <IntlProvider locale={lang.locale} messages={lang.message}>
      {children}
    </IntlProvider>
  );
};

export default LocalProvider;
