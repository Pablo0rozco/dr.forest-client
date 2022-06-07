import { NavLink, useNavigate } from "react-router-dom";
import {useContext} from "react"
import {AuthContext} from "../context/auth.context.js"



function Navbar() {
  const {isLoggedIn, user, authenticateUser, isCliente, isProfesional } = useContext(AuthContext)
  const navigate = useNavigate()

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
    navigate("/")
  }
  console.log(user);

  //! RETURN:
  // 1º Si Logeado y Profesional
  // 2º Si logeado y cliente
  // 3º Si no logeado
  return (
    <div>
      <div>
        {user !== null && <p>Bienvenido: {user.username}</p>}
        {(isLoggedIn === true && isProfesional === true) && (
          <nav>
            <NavLink to="/" style={toggleStyles}> Home </NavLink>
            <NavLink to="/servicios/crear" style={toggleStyles}> Crear servicio </NavLink>
            <NavLink to="/presupuestos" style={toggleStyles}> Ver Solicitudes </NavLink>            
            <button onClick={handleLogout}>Cerrar Sesion</button>
          </nav>
        )}
      </div>

      <div>      
      {(isLoggedIn === true && isCliente === true) && (
        <nav>
          <NavLink to="/" style={toggleStyles}> Home </NavLink>          
          <NavLink to="/presupuestos" style={toggleStyles}> Ver tus presupuestos </NavLink>
            <button onClick={handleLogout}>Cerrar Sesion</button>
        </nav>
      )}      
      </div>        
      <div>

      {(isLoggedIn === false) && (
        <nav>
          <NavLink to="/" style={toggleStyles}> Home </NavLink>  
          <NavLink to="/signup" style={toggleStyles}> Registrase </NavLink>        
          <NavLink to="/login" style={toggleStyles}> Acceder </NavLink>            
        </nav>
      )}  

      </div>

    </div>
    
  );
}

export default Navbar;