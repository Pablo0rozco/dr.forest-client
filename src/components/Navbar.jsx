import { NavLink } from "react-router-dom";
import {useContext} from "react"
import {AuthContext} from "../context/auth.context.js"

function Navbar() {
  const {isLoggedIn, user, authenticateUser } = useContext(AuthContext)

  const toggleStyles = (navInfo) => {
    return navInfo.isActive === true ? activeStyles : inActiveStyles;
  };

  const activeStyles = {
    textDecoration: "underline",
  };

  const inActiveStyles = {
    textDecoration: "none",
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    authenticateUser()
  }
  console.log(user);
  return (
    <div>
      {user !== null && <p>Bienvenido: {user.username}</p>}

      {isLoggedIn === true ? (
        <nav>
          <NavLink to="/" style={toggleStyles}> Home </NavLink>
          <NavLink to="/servicios/crear" style={toggleStyles}> Crear servicio </NavLink>
        <NavLink to="/presupuestos" style={toggleStyles}> Ver tus presupuestos </NavLink>

          <button onClick={handleLogout}>Cerrar Sesion</button>

        </nav>
      ) : (
        <nav>
        <NavLink to="/" style={toggleStyles}> Home </NavLink>
          <NavLink to="/signup" style={toggleStyles}> Registro </NavLink>
        <NavLink to="/login" style={toggleStyles}> Acceso </NavLink>
        
        
        </nav>
      )}


      

      
    </div>
  );
}

export default Navbar;