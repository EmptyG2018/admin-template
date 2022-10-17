import zh_CN from "./zh-CN";
import zh_HK from "./zh-HK";
import en_US from "./en-US";

type LocalMapProps = {
  [key: string]: {
    icon: string;
    title: string;
    message: any;
  };
};

export const localeMap: LocalMapProps = {
  "zh-CN": {
    icon: "🇨🇳",
    title: "简体中文",
    message: zh_CN,
  },
  "zh-HK": {
    icon: "🇭🇰",
    title: "繁體中文",
    message: zh_HK,
  },
  "en-US": {
    icon: "",
    title: "English",
    message: en_US,
  },
};
