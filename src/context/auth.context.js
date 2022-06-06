import { createContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.services";

const AuthContext = createContext();

function AuthWrapper(props) {
  //! Estados y funciones que modifican
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
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
      setIsLoadingUser(false);
    } catch (error) {
      console.log("El usuario no tiene token o el token no es valido");
      setIsLoggedIn(false);
      setUser(null);
      setIsLoadingUser(false);
    }
  };
  const passedContext = {
    isLoggedIn,
    user,
    authenticateUser,
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
