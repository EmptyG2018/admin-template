import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfile } from "../store/user";
import type { AppDispatch } from "../store";
import LoadingPage from "./LoadingPage";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/userUser";

type Props = {
  element: React.ReactElement;
};

const Auth: React.FC<Props> = ({ element }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useAuth();
  const { userInfo } = useUser();

  if (token && !userInfo) {
    dispatch(getProfile());

    return <LoadingPage />;
  }

  if (token && userInfo) {
    if (location.pathname === "/login") {
      navigate(-1);
    } else {
      return element;
    }
  }

  return <Navigate to="/login" replace />;
};

export default Auth;
