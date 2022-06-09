import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context.js";

function Navbar() {
  const { isLoggedIn, user, authenticateUser, isCliente, isProfesional } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const toggleStyles = (navInfo) => {
    return navInfo.isActive === true ? activeStyles : inActiveStyles;
  };

  const activeStyles = {
    width: " 18%",
    height: "55%",
    fontSize: "30px",
  };

  const inActiveStyles = {
    textDecoration: "none",
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/");
  };
  console.log(user);

  //! RETURN:

  return (
    <div>
      {/* // 1º Si Logeado y Profesional */}
      {isLoggedIn === true && isProfesional === true && (
        <div className="navbar-general">
          <nav className="navbar-conainer">
            <NavLink className="NavLink" to="/" style={toggleStyles}>
              Home
            </NavLink>

            <NavLink
              className="NavLink"
              to="/presupuestos/empresa"
              style={toggleStyles}
            >
              Ver Solicitudes
            </NavLink>

            <NavLink
              className="NavLink"
              to="/servicios/crear"
              style={toggleStyles}
            >
              Crear servicio
            </NavLink>

            <NavLink className="NavLink" to="/perfil" style={toggleStyles}>
              Ver Perfil
            </NavLink>

            <button onClick={handleLogout}>Cerrar Sesion</button>
          </nav>
        </div>
      )}

      {/* // 2º Si logeado y cliente */}
      <div>
        {isLoggedIn === true && isCliente === true && (
          <div className="navbar-general">
            <nav className="navbar-conainer">
              <NavLink className="NavLink" to="/" style={toggleStyles}>
                Home
              </NavLink>

              <NavLink
                className="NavLink"
                to="/presupuestos"
                style={toggleStyles}
              >
                Ver Presupuestos
              </NavLink>

              <NavLink className="NavLink" to="/perfil" style={toggleStyles}>
                Ver Perfil
              </NavLink>

              <button onClick={handleLogout}>Cerrar Sesion</button>
            </nav>
          </div>
        )}
      </div>

      {/* // 3º Si no logeado */}
      <div>
        {isLoggedIn === false && (
          <div className="navbar-general">
            <nav className="navbar-conainer">
              <NavLink className="NavLink" to="/" style={toggleStyles}>
                Home
              </NavLink>

              <NavLink className="NavLink" to="/signup" style={toggleStyles}>
                Registrase
              </NavLink>

              <NavLink className="NavLink" to="/login" style={toggleStyles}>
                Acceder
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
