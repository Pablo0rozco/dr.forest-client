import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { profileService } from "../../services/editProfile.services";
import PacmanLoader from "react-spinners/PacmanLoader";

function Profile() {
  const { user } = useContext(AuthContext);
  const [actualPerfil, setActualPerfil] = useState(null);

  console.log(user.userType);

  console.log("estoooo", actualPerfil);

  useEffect(() => {
    getDetailsProfile();
  }, []);

  const getDetailsProfile = async () => {
    const response = await profileService();
    console.log(response.data);
    setActualPerfil(response.data);
  };

  if (!actualPerfil) {
    return (
      <div>
        <br />
        <br />
        <h2>Conectando con el servidor</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <PacmanLoader />
      </div>
    );
  }

  return (
    <div id="container">
      <div id="container-perfil">
<div id="contact_form">
        <h1>
          &bull; <h1>PERFIL</h1> &bull;
        </h1>

        <br />
        <div className="perfil-detail">
        <table>
          <p>Nombre de usuario: {actualPerfil.username}</p>
          <p>Email: {actualPerfil.email}</p>
          <p>Teléfono: {actualPerfil.telf}</p>
          <p>Código Postal: {actualPerfil.cp}</p>
        </table>
          
        </div>

        {user.userType === "profesional" && (
          <div className="perfil-detail">
            <p> {actualPerfil.pais}</p>
            <p> {actualPerfil.provincia}</p>
            <p> {actualPerfil.poblacion}</p>
            <p> {actualPerfil.calle}</p>
            <p> {actualPerfil.numero}</p>
            <p> {actualPerfil.piso}</p>
            <p> {actualPerfil.username}</p>
            <p> {actualPerfil.cif}</p>
            <p> {actualPerfil.rSocial}</p>
          </div>
        )}

        <br />
      </div>

      <div id="form_button">
        <Link to={"/editarPerfil"}>Editar Perfil</Link>
      </div>
      </div>
      
    </div>
  );
}

export default Profile;
