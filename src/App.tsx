import React from "react";
import logo from "./logo.svg";
import "./App.less";
import store from "./store";
import { Provider } from "react-redux";


import { BrowserRouter } from "react-router-dom";

import { GetSystemError, GetError } from "./services/user";
import { useRequest } from "ahooks";
import RouterMap from "./RouterMap";

type Props = {
  children: React.ReactElement;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    // <Provider store={store}>{children}</Provider>
    children
  )
};

const App = () => {
  useRequest(GetSystemError);
  useRequest(GetError);

  return (
    <AppProvider>
      <RouterMap />
    </AppProvider>
  );
};

export default App;
