import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { crearPresupuestoService } from "../../services/presupuestos.services.js";

function Presupuestos() {
    const navigate = useNavigate()
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
  const handleAddPresupuesto = async () => {
    try {
        const presupuesto = {
          form,
        };
        console.log(presupuesto);
        const response = await crearPresupuestoService
  
        console.log(response);
  
        navigate("/");
      } catch (error) {
        console.log(error);
        navigate("/error");
      }
  };



  return (
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
        onChange={handlePreFormChange}
      />

      <label>Pais:</label>
      <input
        type="text"
        name="pais"
        value={form.pais}
        onChange={handlePreFormChange}
      />

      <label>Provincia:</label>
      <input
        type="text"
        name="provincia"
        value={form.provincia}
        onChange={handlePreFormChange}
      />

      <label>Población:</label>
      <input
        type="text"
        name="poblacion"
        value={form.poblacion}
        onChange={handlePreFormChange}
      />

      <label>calle:</label>
      <input
        type="text"
        name="calle"
        value={form.calle}
        onChange={handlePreFormChange}
      />

      <label>numero:</label>
      <input
        type="number"
        name="numero"
        value={form.numero}
        onChange={handlePreFormChange}
      />

      <label>piso:</label>
      <input
        type="text"
        name="piso"
        value={form.piso}
        onChange={handlePreFormChange}
      />

      <label>Observaciones:</label>
      <input
        type="text"
        name="observaciones"
        value={form.observaciones}
        onChange={handlePreFormChange}
      />

      <label>Numero de Empleados:</label>
      <input
        type="text"
        name="numEmpleados"
        value={form.numEmpleados}
        onChange={handlePreFormChange}
      />

      <label>Metros cuadrados:</label>
      <input
        type="text"
        name="metro2"
        value={form.metro2}
        onChange={handlePreFormChange}
      />

      <label>Precio:</label>
      <input
        type="text"
        name="precio"
        value={form.precio}
        onChange={handlePreFormChange}
      />

      <label>servicioId:</label>
      <input
        type="text"
        name="servicioId"
        value={form.servicioId}
        onChange={handlePreFormChange}
      />
      <button onClick={handleAddPresupuesto}>Solicitar Presupuesto</button>
    </div>
  );
}

export default Presupuestos;
