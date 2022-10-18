import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactElement;
};

type AuthContextProps = {
  token: string;
};

export const AuthContext = createContext<AuthContextProps>(null!);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token] = useState<string>("");

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
