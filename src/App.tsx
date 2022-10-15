import StoreProvider from "./StoreProvider";
import LocalProvider from "./LocalProvider";
import RouterProvider from "./RouterProvider";
import React from "react";
import "./App.css";

type Props = {
  children: React.ReactElement;
};

const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <StoreProvider>
      <LocalProvider>{children}</LocalProvider>
    </StoreProvider>
  );
};

const App = () => {
  return (
    <AppProvider>
      <RouterProvider />
    </AppProvider>
  );
};

export default App;
