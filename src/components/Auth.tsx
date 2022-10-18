import { Navigate } from "react-router-dom";
import React from "react";
import useAuth from "../hooks/useAuth";

type Props = {
  element: React.ReactElement;
};

const Auth: React.FC<Props> = ({ element }) => {
  const auth = useAuth();

  if (auth.token) {
    return element;
  }

  return <Navigate to="/403" replace />;
};

export default Auth;
