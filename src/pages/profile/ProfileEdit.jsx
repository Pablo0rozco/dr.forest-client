import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { editProfileService} from "../../services/profile.services"
import { AuthContext } from "../../context/auth.context"


function ProfileEdit() {

  const {user} = useContext(AuthContext)
  

  const [ username, setUserName ] = useState(user.username)
  const [ email, setEmail ] = useState(user.email)


  const navigate = useNavigate()

  const handleUserNameChange = (e) => setUserName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {      


    try {
      const objData = {
          username,
          email
      }
      const response = await editProfileService(objData)
      console.log(response.data)
      setUserName(username)
      setEmail(email)
    //   setImg(response.data.img)

    } catch (error) {
      navigate("/error")
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userUpdate = {
      username,
      email,
    //   img
    }

    try {
      const response = await editProfileService(userUpdate)
      console.log(response.data)
      navigate("/perfil/editar")
    } catch (err) {
      navigate("error")
    }
  }

//   const handleImgChange = async(e) => {

//     console.log(e.target.files[0])

//     const uploadForm = new FormData()
//     uploadForm.append("img", e.target.files[0])

//     try {

//       const response = await uploadService(uploadForm)
//       setImg(response.data)

//     } catch {
//       navigate("/error")
//     }

//   }

//   if (!username) {
//       return <h3>...Loading</h3>
//   }

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
  )
}
export default ProfileEdit