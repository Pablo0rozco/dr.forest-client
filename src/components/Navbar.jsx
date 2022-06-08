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
    textDecoration: "underline",
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
      <div>
        {isLoggedIn === true && isProfesional === true && (

          
          <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  <NavLink to="/" style={toggleStyles}>
                    {" "}
                    Home{" "}
                  </NavLink>
                </a>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  <NavLink to="/presupuestos/empresa" style={toggleStyles}>
                    {" "}
                    Ver Solicitudes{" "}
                  </NavLink>
                </a>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  <NavLink to="/servicios/crear" style={toggleStyles}>
                    {" "}
                    Crear servicio{" "}
                  </NavLink>
                </a>

                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  <NavLink to="/perfil" style={toggleStyles}>
                    Ver Perfil
                  </NavLink>
                </a>

                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  <button onClick={handleLogout}>Cerrar Sesion</button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* // 2º Si logeado y cliente */}
      <div>
        {isLoggedIn === true && isCliente === true && (
          <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  <NavLink to="/" style={toggleStyles}>
                    {" "}
                    Home{" "}
                  </NavLink>
                </a>

                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  <NavLink to="/presupuestos" style={toggleStyles}>
                    {" "}
                    Ver tus presupuestos{" "}
                  </NavLink>
                </a>

                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  <NavLink to="/perfil" style={toggleStyles}>
                    Ver Perfil
                  </NavLink>
                </a>

                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  <button onClick={handleLogout}>Cerrar Sesion</button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* // 3º Si no logeado */}
      <div>
        {isLoggedIn === false && (
          <nav class="flex items-center justify-between flex-wrap bg-[#15803d] p-6">
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div class="text-sm lg:flex-grow">
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  <NavLink to="/" style={toggleStyles}>
                    {" "}
                    Home{" "}
                  </NavLink>
                </a>

                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  <NavLink to="/signup" style={toggleStyles}>
                    {" "}
                    Registrase{" "}
                  </NavLink>
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  <NavLink to="/login" style={toggleStyles}>
                    {" "}
                    Acceder{" "}
                  </NavLink>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
