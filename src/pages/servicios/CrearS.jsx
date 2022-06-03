import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearServicioService } from "../../services/servicios.sevices";

function CrearS() {
  const [form, setForm] = useState({
    img: " ",
    nombre: " ",
    breveDesc: " ",
    descripcion: " ",
    utilidades: " ",
  });

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
      navigate("/error");
    }
  };

  return (
    <div>
      <label>Imagen:</label>
      <input
        type="img"
        name="img"
        value={form.img}
        onChange={handleFormChange}
      />
      <br />

      <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleFormChange}
      />
      <br />
      <label>Descripción breve:</label>
      <input
        type="text"
        name="breveDesc"
        value={form.breveDesc}
        onChange={handleFormChange}
      />
      <br />
      <label>Descripción:</label>
      <input
        type="text"
        name="descripcion"
        value={form.descripcion}
        onChange={handleFormChange}
      />
      <br />
      <label>Utilidades:</label>
      <input
        type="text"
        name="utilidades"
        value={form.utilidades}
        onChange={handleFormChange}
      />
      <br />
      <button onClick={handleAñadirServicio}>Añadir Servicio</button>
    </div>
  );
}

export default CrearS;
