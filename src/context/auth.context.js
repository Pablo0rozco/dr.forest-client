import { createContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.services";

const AuthContext = createContext();

function AuthWrapper(props) {
  //! Estados y funciones que modifican
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isCliente, setIsCliente] = useState(false);
  const [isProfesional, setProfesional] = useState(false);
  const [username, setUserName] = useState(null)
  const [email, setEmail] = useState(null)
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
      setUserName(response.data.username)
      setIsLoadingUser(false);
      // return setIsLoggedIn(true)
      //! Setea si el usuario es cliente o profesional
      
      if (response.data.userType === "cliente") {
        setIsCliente(true);
      } else if (response.data.userType === "profesional") {
        setProfesional(true);
      } else {
        setProfesional(false);
        setIsCliente(false);
      }
    } catch (error) {
      console.log("El usuario no tiene token o el token no es valido");
      setIsLoggedIn(false);
      setUser(null);
      setIsLoadingUser(false);
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
    email
  };

  

  useEffect(() => {
    authenticateUser();
  }, []);

  if (isLoadingUser === true) {
    return (
      <div className="App">
        <h3>Verificando al usuario</h3>
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
