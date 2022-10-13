import { Provider } from "react-redux";
import React from "react";
import store from "./store";

type Props = {
  children: React.ReactElement;
}

const StoreProvider: React.FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider;
