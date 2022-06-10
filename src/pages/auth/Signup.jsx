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
    <div className=" h-[100%]" id="form-container">
      <div id="container">
        <h1>Hazte miembro</h1>

        <h3>Tipo de usuario</h3>

        <label>Cliente</label>
        <input
          id="checkC"
          type="radio"
          name="userType"
          value="cliente"
          onChange={handleUserTypeChange}
        />

        <label>Profesional</label>
        <input
          id="checkP"
          type="radio"
          name="userType"
          value="profesional"
          onChange={handleUserTypeChange}
        />

        {userType === "cliente" || userType === "profesional" ? (
          <div>
            <div class="relative z- w-full mb-6 group  ">
              <label>Nombre de usuario:</label>
              <input
                type="text"
                name="username"
                value={username}
                className="placeholder:text-black"
                placeholder="Introduce tu nombre de usuario"
                onChange={handleUsernameChange}
              />
            </div>
            <br />
            <div class="relative z-0 w-full mb-6 group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <br />
            <div class="relative z-0 w-full mb-6 group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <br />
            <div class="relative z-0 w-full mb-6 group">
              <label>Teléfono:</label>
              <input
                type="tel"
                name="telf"
                value={telf}
                onChange={handleTelfChange}
              />
            </div>
            <br />
            <div class="relative z-0 w-full mb-6 group">
              <label>Código Postal:</label>
              <input
                type="text"
                name="cp"
                value={cp}
                onChange={handleCpChange}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {userType === "profesional" ? (
          <div>
            <h2>
              <b>Datos de la empresa:</b>
            </h2>
            <br />
            <div class="relative z-0 w-full mb-6 group">
              <label>País:</label>
              <input
                type="text"
                name="pais"
                value={pais}
                onChange={handlePaisChange}
              />
            </div>
            <br />
            <div class="relative z-0 w-full mb-6 group">
              <label>Provincia:</label>
              <input
                type="text"
                name="provincia"
                value={provincia}
                onChange={handleProvinciaChange}
              />
            </div>
            <br />
            <div class="relative z-0 w-full mb-6 group">
              <label>Población:</label>
              <input
                type="text"
                name="poblacion"
                value={poblacion}
                onChange={handlePoblacionChange}
              />
            </div>
            <br />
            <div class="relative z-0 w-full mb-6 group">
              <label>Calle:</label>
              <input
                type="text"
                name="calle"
                value={calle}
                onChange={handleCalleChange}
              />
            </div>
            <br />
            <div class="relative z-0 w-full mb-6 group">
              <label>Número:</label>
              <input
                type="text"
                name="numero"
                value={numero}
                onChange={handleNumeroChange}
              />
            </div>
            <br />

            <label>Piso:</label>
            <input
              type="text"
              name="piso"
              value={piso}
              onChange={handlePisoChange}
            />
            <br />
            <label>CIF:</label>
            <input
              type="text"
              name="cif"
              value={cif}
              onChange={handleCifChange}
            />
            <br />
            <label>Razón Social:</label>
            <input
              type="text"
              name="rSocial"
              value={rSocial}
              onChange={handleRSocialChange}
            />
          </div>
        ) : (
          <div></div>
        )}

        {userType === "cliente" || userType === "profesional" ? (
          <div id="form_button">
            <button onClick={handleSignup}>Registrarse</button>
          </div>
        ) : (
          <div></div>
        )}
        {errorMessage !== null && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Signup;
