import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/auth.context";
import {
  editarPerfilService,
  profileService,
} from "../../services/editProfile.services";

function ProfileEdit() {
  const { user, setUser, authenticateUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
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
  const handleSubmit = async (e) => {
    try {
      const userUpdate = {
        username,
        email,
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
      await editarPerfilService(userUpdate);

      navigate("/perfil");
    } catch (err) {
      console.log(err);
      navigate("/error");
    }
  };

  useEffect(() => {
    getDetailsProfile();
  }, []);

  const getDetailsProfile = async () => {
    const response = await profileService();
    console.log(response.data);
    setUsername(response.data.username);
    setEmail(response.data.email);

    setTelf(response.data.telf);
    setCp(response.data.cp);
    setPais(response.data.pais);
    setProvincia(response.data.provincia);
    setPoblacion(response.data.poblacion);
    setCalle(response.data.calle);
    setNumero(response.data.numero);
    setPiso(response.data.piso);
    setCif(response.data.cif);
    setRSocial(response.data.rSocial);
  };

  if (!user) {
    return <h3>...Loading</h3>;
  }

  return (
    <div id="container">
      <div>
        {user.userType === "cliente" || user.userType === "profesional" ? (
          <div>
            <div class="relative z-0 w-full mb-6 group">
              <label>Nombre de usuario:</label>
              <input
                type="text"
                name="username"
                value={username}
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

        {user.userType === "profesional" ? (
          <div>
            <hr />
            <h2>Datos de la empresa:</h2>
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

        {user.userType === "cliente" || user.userType === "profesional" ? (
          <button onClick={handleSubmit}>Actualizar</button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default ProfileEdit;
