import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfile } from "../store/user";
import type { AppDispatch } from "../store";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/userUser";
import { delay } from "../utils";

type Props = {
  element: React.ReactElement;
};

const Auth: React.FC<Props> = ({ element }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useAuth();
  const { userInfo } = useUser();

  useEffect(() => {
    (async () => {
      if (token && !userInfo) {
        delay(3000);
        dispatch(getProfile());
      }
    })();
  }, [dispatch, token, userInfo]);

  if (token && !userInfo) {
    return <p>loading...</p>;
  }

  if (token && userInfo) {
    return element;
  }

  return <Navigate to="/403" replace />;
};

export default Auth;
