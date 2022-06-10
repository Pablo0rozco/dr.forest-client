import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { profileService } from "../../services/editProfile.services";

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
    return <h3>Loading</h3>;
  }

  return (
    <div id="container h-[100%] ">
      <div id="contact_form">
        <h1>
          &bull; <h1>PERFIL</h1> &bull;
        </h1>

        <br />
        <div>
          <p> {actualPerfil.username}</p>
          <p> {actualPerfil.email}</p>
          <p> {actualPerfil.telf}</p>
          <p> {actualPerfil.cp}</p>
        </div>

        {user.userType === "profesional" && (
          <div>
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
  );
}

export default Profile;
