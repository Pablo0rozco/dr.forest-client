import React, { useState } from "react";

function presupuestos() {
  const [form, setForm] = useState({
    fecha: "",
    direction: "",
    pais: "",
    provincia: "",
    poblacion: "",
    calle: "",
    numero: "",
    piso: "",
    observaciones: "",
    numEmpleados: "",
    metro2: "",
    precio: "",
    servicioId: "",
  });

  const handlePreFormChange = (e) => {
    const formCopy = { ...form };

    formCopy[e.target.value] = e.target.value;
    setForm(formCopy);
  };
  const handleAddPresupuesto = () => {};

  return
  <div>
  <label>Fecha:</label>
      <input
        type="date"
        name="fecha"
        value={form.fecha}
        onChange={handlePreFormChange}
      />

      <label>Dirección:</label>
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

      <button onClick={handleAddPresupuesto}>Añadir Presupuesto</button>
  </div>;
}

export default presupuestos;
