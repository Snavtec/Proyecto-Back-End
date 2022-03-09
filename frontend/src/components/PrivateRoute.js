import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function PrivateRoute(props) {
  const { user } = useContext(AuthContext);
  return user !== null ? props.children : <Navigate to="/login" />;
}

export default PrivateRoute;
