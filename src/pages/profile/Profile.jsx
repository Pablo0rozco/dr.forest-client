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
    <div>
      <br />

      <br />
      <h1>PERFIL</h1>
      <br />
      <p> {actualPerfil.username}</p>
      <p> {actualPerfil.email}</p>
      <br />

      <Link to={"/editarPerfil"}>Editar Perfil</Link>
    </div>
  );
}

export default Profile;
