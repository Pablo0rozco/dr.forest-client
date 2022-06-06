import { React, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsUserCliente(props) {
  const { isCliente } = useContext(AuthContext);

  if (isCliente === true) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default IsUserCliente;
