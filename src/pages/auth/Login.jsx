import { useState, useContext } from "react";
import { loginService } from "../../services/auth.services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context.js";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

function Login() {
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    // ... login logic here
    const user = {
      email,
      password,
    };

    if (email === null || password === null) {
      return (
        <div className="App">
          <h3>Buscando respuesta con el servidor</h3>
          <PacmanLoader color={"green"} size={100} />
        </div>
      );
    }

    try {
      // validaremos al usuario
      const response = await loginService(user);
      // console.log("usuario validado", response.data)
      // guardamos el token en localStorage
      localStorage.setItem("authToken", response.data.authToken);
      authenticateUser();
      navigate("/");

      // asignar los valores a los estados globales para manejo en el FE
    } catch (error) {
      console.log(error.response.data);
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="card-container-login">
        <h5 class="">Accede a Dr.Forest</h5>
        <br />
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            className="bg-transparent text-color white"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="name@dr-forest.com"
            id
          />
          <br />

          <label>Contraseña:</label>
          <br />

          <input
            className="bg-transparent"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="••••••••"
          />

          {errorMessage !== null && <p className="messagge">{errorMessage}</p>}
          <br />
          <button type="submit">Acceder</button>
        </form>

        <div id="link-login">
          ¿No estas registrado?{" "}
          <Link className="" to={"/signup"}>
            <span id="bold">
              <b>Regístrate</b>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
