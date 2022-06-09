import { useState, useContext } from "react";
import { loginService } from "../../services/auth.services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context.js";
import { Link } from "react-router-dom";

function Login() {
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div id="container" className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-green-800 dark:border-gray-700">
      <h5 class="text-xl font-800 text-gray-900 dark:text-white">
        Accede a Dr.Forest
      </h5>
      <br />
      <div id="contact_form">
        <form
        className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
        onSubmit={handleLogin}
      >
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@dr-forest.com"
        />
        <br />

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Contraseña:
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />

        <br />

        {errorMessage !== null && <p>{errorMessage}</p>}
        <br />
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Acceder
        </button>

        
      </form>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        ¿No estas registrado?{" "}
        <Link
          to={"/signup"}
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          Regístrate
        </Link>
      </div>
      </div>
      

      
    </div>
  );
}

export default Login;
