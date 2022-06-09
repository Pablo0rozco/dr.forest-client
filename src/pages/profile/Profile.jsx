import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { profileService } from "../../services/editProfile.services";

function Profile() {
  const { user } = useContext(AuthContext);
  const [actualPerfil, setActualPerfil] = useState(null);

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
    <div id="container">
      
    <div id="contact_form">

    <h1>&bull; <h1>PERFIL</h1> &bull;</h1>
      
      <br />
      <p> {actualPerfil.username}</p>
      <p> {actualPerfil.email}</p>
      <br />
    </div>
      
      
      <div id="form_button">
      <Link to={"/editarPerfil"}>Editar Perfil</Link>
      </div>
      
    </div>
  );
}

export default Profile;
