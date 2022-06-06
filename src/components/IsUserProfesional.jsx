import { React, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";
function IsUserProfesional(props) {
  const { isProfesional } = useContext(AuthContext);

  if (isProfesional === true) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default IsUserProfesional;
