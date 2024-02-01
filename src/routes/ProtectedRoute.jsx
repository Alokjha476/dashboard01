import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, useNavigate } from "react-router-dom";
import ShowLoaderWithLogged from "../components/ShowLoaderWithLogged";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return <ShowLoaderWithLogged />;
  } else if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  } else if (isAuthenticated) {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
