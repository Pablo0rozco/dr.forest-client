import React, { useState } from "react";

function CrearS() {
  const [form, setForm] = useState({
    img: null,
    nombre: null,
    breveDesc: null,
    descripcion: null,
    utilidades: null,
  });

  const handleFormChange = (e) => {
    const formCopy = { ...form };

    formCopy[e.target.name] = e.target.value;

    setForm(formCopy);
  };

  const handleAñadirServicio = () => {};

  return (
    <div>
      <label>Imagen:</label>
      <input
        type="img"
        name="img"
        value={form.img}
        onChange={handleFormChange}
      />

      <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleFormChange}
      />

      <label>Descripción breve:</label>
      <input
        type="text"
        name="breveDesc"
        value={form.breveDesc}
        onChange={handleFormChange}
      />

      <label>Descripción:</label>
      <input
        type="text"
        name="descripcion"
        value={form.descripcion}
        onChange={handleFormChange}
      />

      <label>Utilidades:</label>
      <input
        type="text"
        name="utilidades"
        value={form.utilidades}
        onChange={handleFormChange}
      />

      <button onClick={handleAñadirServicio}>Añadir Servicio</button>
    </div>
  );
}

export default CrearS;
