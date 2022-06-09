import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/auth.context";
import {
  editarPerfilService,
  profileService,
} from "../../services/editProfile.services";

function ProfileEdit() {
  const { user, setUser, authenticateUser } = useContext(AuthContext);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  const navigate = useNavigate();
  console.log(user);
  const handleUserNameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    try {
      const userUpdate = {
        username,
        email,
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
  };

  if (!user) {
    return <h3>...Loading</h3>;
  }

  return (
    <div id="container">
    <div>
        <label>Nombre de usuario:</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleUserNameChange}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
    

      {/* <label htmlFor="image">Imagen</label>
        <input type="file" name="img" onChange={handleImgChange} /> */}

      <button onClick={handleSubmit}>Actualizar</button>

      {/* <img src={img} alt="profile-pic" width={100}/> */}
    </div>
  );
}

export default ProfileEdit;
