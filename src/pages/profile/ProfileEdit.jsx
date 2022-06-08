import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/auth.context";
import { editarPerfilService } from "../../services/editProfile.services";

function ProfileEdit() {
  const { user } = useContext(AuthContext);

  const [username, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  //   const [ img, setImg ] = useState()

  const navigate = useNavigate();

  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    try {
      const userUpdate = {
        username,
        email,
        //   img
      };
      const response = await editarPerfilService(userUpdate);
      console.log(response.data);
      navigate("/perfil/editar");
    } catch (err) {
      console.log(err);
      navigate("/error");
    }
  };

  if (!username) {
    return <h3>...Loading</h3>;
  }

  return (
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

      {/* <label htmlFor="image">Imagen</label>
        <input type="file" name="img" onChange={handleImgChange} /> */}

      <button onClick={handleSubmit}>Actualizar</button>

      {/* <img src={img} alt="profile-pic" width={100}/> */}
    </div>
  );
}

export default ProfileEdit;
