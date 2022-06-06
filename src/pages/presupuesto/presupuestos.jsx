import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { crearPresupuestoService } from "../../services/presupuestos.services.js";

function Presupuestos() {
  const navigate = useNavigate();
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

    servicioId: "",
  });

  const handlePreFormChange = (e) => {
    const formCopy = { ...form };

    formCopy[e.target.name] = e.target.value;

    setForm(formCopy);
  };
  const handleAddPresupuesto = async () => {
    try {
      const response = await crearPresupuestoService(form);

      console.log(response);

      navigate("/");
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  return (
    <div>
      <br />
      <label>Fecha:</label>
      <input
        type="date"
        name="fecha"
        value={form.fecha}
        onChange={handlePreFormChange}
      />
      <br />
      <label>Dirección:</label>
      <input
        type="text"
        name="direction"
        value={form.nombre}
        onChange={handlePreFormChange}
      />
      <br />
      <label>Pais:</label>
      <input
        type="text"
        name="pais"
        value={form.pais}
        onChange={handlePreFormChange}
      />
      <br />
      <label>Provincia:</label>
      <input
        type="text"
        name="provincia"
        value={form.provincia}
        onChange={handlePreFormChange}
      />
      <br />
      <label>Población:</label>
      <input
        type="text"
        name="poblacion"
        value={form.poblacion}
        onChange={handlePreFormChange}
      />
      <br />
      <label>calle:</label>
      <input
        type="text"
        name="calle"
        value={form.calle}
        onChange={handlePreFormChange}
      />
      <br />
      <label>numero:</label>
      <input
        type="number"
        name="numero"
        value={form.numero}
        onChange={handlePreFormChange}
      />
      <br />
      <label>piso:</label>
      <input
        type="text"
        name="piso"
        value={form.piso}
        onChange={handlePreFormChange}
      />
      <br />
      <label>Observaciones:</label>
      <input
        type="text"
        name="observaciones"
        value={form.observaciones}
        onChange={handlePreFormChange}
      />
      <br />
      <label>Numero de Empleados:</label>
      <input
        type="number"
        name="numEmpleados"
        value={form.numEmpleados}
        onChange={handlePreFormChange}
      />
      <br />
      <label>Metros cuadrados:</label>
      <input
        type="number"
        name="metro2"
        value={form.metro2}
        onChange={handlePreFormChange}
      />

      <br />
      <label>servicioId:</label>
      <input
        type="text"
        name="servicioId"
        value={form.servicioId}
        onChange={handlePreFormChange}
      />
      <br />
      <button onClick={handleAddPresupuesto}>Solicitar Presupuesto</button>
    </div>
  );
}

export default Presupuestos;
