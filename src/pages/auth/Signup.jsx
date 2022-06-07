import { useState } from "react";
import { signupService } from "../../services/auth.services.js";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  //________________________________________________________________________
  //! ESTADOS
  //? Estados propiedades modelo Usuario
  const [img, setImg] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [telf, setTelf] = useState(0);
  const [cp, setCp] = useState(0);
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [poblacion, setPoblacion] = useState("");
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState(0);
  const [piso, setPiso] = useState(0);
  const [cif, setCif] = useState("");
  const [rSocial, setRSocial] = useState("");
  //? Estado Mensaje de Error
  const [errorMessage, setErrorMessage] = useState(null);
  //________________________________________________________________________

  //! HANDLERS
  const handleImgChange = (e) => setImg(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  // const handleUserTypeChange = (e) => setUserType(e.target.value);
  const handleTelfChange = (e) => setTelf(e.target.value);
  const handleCpChange = (e) => setCp(e.target.value);
  const handlePaisChange = (e) => setPais(e.target.value);
  const handleProvinciaChange = (e) => setProvincia(e.target.value);
  const handlePoblacionChange = (e) => setPoblacion(e.target.value);
  const handleCalleChange = (e) => setCalle(e.target.value);
  const handleNumeroChange = (e) => setNumero(e.target.value);
  const handlePisoChange = (e) => setPiso(e.target.value);
  const handleCifChange = (e) => setCif(e.target.value);
  const handleRSocialChange = (e) => setRSocial(e.target.value);
  const handleUserTypeChange = (e) => {
    console.log(userType);
    setUserType(e.target.value);

    console.log(e.target.value);
    console.log(e.target.checked);
  };

  //______________________________________________________________________

  const handleSignup = async (e) => {
    e.preventDefault();

    const user = {
      img,
      username,
      email,
      password,
      userType,
      telf,
      cp,
      pais,
      provincia,
      poblacion,
      calle,
      numero,
      piso,
      cif,
      rSocial,
    };

    try {
      await signupService(user);
      console.log("todo bien");
      navigate("/login");
    } catch (error) {
      console.log(error);

      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div>
      <h1>Hazte miembro</h1>

      <h3>Tipo de usuario</h3>

      <label>Cliente</label>
      <input
        id="checkC"
        type="radio"
        name="userType"
        value="cliente"
        onChange={handleUserTypeChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

      />

      <label>Profesional</label>
      <input
        id="checkP"
        type="radio"
        name="userType"
        value="profesional"
        onChange={handleUserTypeChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />

      {userType === "cliente" || userType === "profesional" ? (
        <div>
          <div class="relative z-0 w-full mb-6 group">
            <label>Nombre de usuario:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <br />
          <div class="relative z-0 w-full mb-6 group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <br />
          <div class="relative z-0 w-full mb-6 group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <br />
          <div class="relative z-0 w-full mb-6 group">
            <label>Teléfono:</label>
            <input
              type="tel"
              name="telf"
              value={telf}
              onChange={handleTelfChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <br />
          <div class="relative z-0 w-full mb-6 group">
            <label>Código Postal:</label>
            <input type="text" name="cp" value={cp} onChange={handleCpChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {userType === "profesional" ? (
        <div>
          <hr />
          <h2>Datos de la empresa:</h2>
          <div class="relative z-0 w-full mb-6 group">
            <label>País:</label>
            <input
              type="text"
              name="pais"
              value={pais}
              onChange={handlePaisChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <br />
          <div class="relative z-0 w-full mb-6 group">
            <label>Provincia:</label>
            <input
              type="text"
              name="provincia"
              value={provincia}
              onChange={handleProvinciaChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <br />
          <div class="relative z-0 w-full mb-6 group">
            <label>Población:</label>
            <input
              type="text"
              name="poblacion"
              value={poblacion}
              onChange={handlePoblacionChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <br />
          <div class="relative z-0 w-full mb-6 group">
            <label>Calle:</label>
            <input
              type="text"
              name="calle"
              value={calle}
              onChange={handleCalleChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <br />
          <div class="relative z-0 w-full mb-6 group">
            <label>Número:</label>
            <input
              type="text"
              name="numero"
              value={numero}
              onChange={handleNumeroChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <br />
          <div class="relative z-0 w-full mb-6 group">
            <label>Piso:</label>
            <input
              type="text"
              name="piso"
              value={piso}
              onChange={handlePisoChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
            <div />
            <br />
            <div class="relative z-0 w-full mb-6 group"></div>
            <label>CIF:</label>
            <input
              type="text"
              name="cif"
              value={cif}
              onChange={handleCifChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <br />
          <div class="relative z-0 w-full mb-6 group">
            <label>Razón Social:</label>
            <input
              type="text"
              name="rSocial"
              value={rSocial}
              onChange={handleRSocialChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {userType === "cliente" || userType === "profesional" ? (
        <button onClick={handleSignup}>Registrarse</button>
      ) : (
        <div></div>
      )}
      {errorMessage !== null && <p>{errorMessage}</p>}
    </div>
  );
}

export default Signup;
