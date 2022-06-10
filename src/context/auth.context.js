import { createContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.services";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const AuthContext = createContext();

function AuthWrapper(props) {
  //! Estados y funciones que modifican
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isCliente, setIsCliente] = useState(false);
  const [isProfesional, setProfesional] = useState(false);
  const [username, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  console.log(isLoggedIn);
  const authenticateUser = async () => {
    setIsLoadingUser(true);
    try {
      // donde llamamos a la ruta verify
      const response = await verifyService();
      console.log("Token valido");
      console.log("el payload es:", response.data);
      setIsLoggedIn(true);
      setUser(response.data);

      // return setIsLoggedIn(true)
      //! Setea si el usuario es cliente o profesional

      console.log(response.data);
      if (response.data.userType === "cliente") {
        setIsCliente(true);
        setProfesional(false);
      } else if (response.data.userType === "profesional") {
        setProfesional(true);
        setIsCliente(false);
      } else {
        setProfesional(false);
        setIsCliente(false);
      }
      setIsLoadingUser(false);
      return response.data;
    } catch (error) {
      console.log("El usuario no tiene token o el token no es valido");
      setIsLoggedIn(false);
      setUser(null);
      setIsLoadingUser(false);
      setProfesional(false);
      setIsCliente(false);
    }
  };
  console.log("Es un cliente=" + isCliente);
  console.log("Es un profesional=" + isProfesional);
  const passedContext = {
    isLoggedIn,
    user,
    isCliente,
    isProfesional,
    authenticateUser,
    setUserName,
    setEmail,
    username,
    email,
    setUser,
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  if (isLoadingUser === true) {
    return (
      <div className="App">
        <h3>Verificando al usuario</h3>
        <ClimbingBoxLoader color={"green"} size={100} />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
