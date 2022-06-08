import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/auth.context";
import { editarPerfilService } from "../../services/editProfile.services";

function ProfileEdit() {
  
  const { user, setUser } = useContext(AuthContext);  
  // const {username, setUserName} = useContext(AuthContext);
  // const {email, setUserName} = useContext(AuthContext)
  

  const navigate = useNavigate();

  const handleUserNameChange = (e) => setUser(e.target.value);
  const handleEmailChange = (e) => setUser(e.target.value);

  const handleSubmit = async (e) => {
    try {
      const userUpdate = {
        // username,
        // email,
        //   img
      };
      const response = await editarPerfilService(userUpdate);
      console.log(response.data);
      navigate("/perfil");
    } catch (err) {
      console.log(err);
      navigate("/error");
    }
  };

  if (!user) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <label>Nombre de usuario:</label>
      <input
        type="text"
        name="user.username"
        // value={username}
        onChange={handleUserNameChange}
      />

      <label>Email:</label>
      <input
        type="email"
        name="user.email"
        // value={email}
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
