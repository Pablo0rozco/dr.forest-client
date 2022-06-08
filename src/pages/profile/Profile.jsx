import { useContext} from "react"
import { Link } from "react-router-dom"

import {AuthContext} from "../../context/auth.context"


function Profile() {    

  const {user} = useContext(AuthContext)  

  return (
    <div>
    <br />

    <br />
      <h1>PERFIL</h1>
      <br />
      <p>| usuario: {user.username} |</p>
      <p>| email: {user.email} |</p>
      {/* <p>Imagen {user.img}</p> */}
    
    <br />
      
      <Link to={"/perfil/editar"}><button>Editar Perfil</button></Link>
    </div>
  )
}

export default Profile