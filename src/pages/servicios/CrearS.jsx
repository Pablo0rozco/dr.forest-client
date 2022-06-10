import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearServicioService } from "../../services/servicios.sevices";

function CrearS() {
  const [form, setForm] = useState({
    img: "",
    nombre: "",
    breveDesc: "",
    descripcion: "",
    utilidades: "",

    
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const formCopy = { ...form };

    formCopy[e.target.name] = e.target.value;

    setForm(formCopy);
  };

  const handleAñadirServicio = async () => {
    try {
      const servicio = {
        form,
      };
      console.log(servicio);
      const response = await crearServicioService(servicio);

      console.log(response);

      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data);
        console.log();
        console.log(error.response.data);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div id="container">

<h1>&bull; Crea un servicio &bull;</h1>

    <div id="contact_form">

    <div className="numero">
      <label>Imagen:</label>
      <input
        type="text"
        name="img"
        value={form.img}
        onChange={handleFormChange}
      />
      <br />
    </div>
      

      <div className="numero">
        <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleFormChange}
      />
      <br />
      </div>

      
      <div className="numero">
        <label>Descripción breve:</label>
      <input
        type="text"
        name="breveDesc"
        value={form.breveDesc}
        onChange={handleFormChange}
      />
      <br />
      </div>

      
      <div className="numero">
        <label>Utilidades:</label>
      <input
        type="text"
        name="utilidades"
        value={form.utilidades}
        onChange={handleFormChange}
      />
      <br />
      </div>

      <div className="observaciones">
                <label for="observaciones">Descripción:</label>
                <textarea name="descripcion" value={form.descripcion}
        onChange={handleFormChange} className="placeholder:text-black" placeholder="Describe el servicio de manera completa" id="message_input" cols="30" rows="5" required></textarea>
              </div>    


      
              <div id="form_button">
                <button onClick={handleAñadirServicio} type="boton" value="Solicitar Presupuesto">Añadir Servicio</button>
              </div>
      
      
      
      

      {errorMessage !== null && <p>{errorMessage}</p>}
    </div>
      
    </div>
  );
}

export default CrearS;
