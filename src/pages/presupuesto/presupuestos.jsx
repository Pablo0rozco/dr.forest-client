import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { crearPresupuestoService } from "../../services/presupuestos.services.js";

function Presupuestos() {
  // const [form, setForm] = useState({
  //   fecha: "",
  //   direction: "",
  //   pais: "",
  //   provincia: "",
  //   poblacion: "",
  //   calle: "",
  //   numero: 0,
  //   piso: "",
  //   observaciones: "",
  //   numEmpleados: "",
  //   metro2: "",
  //   precio: "",
  //   servicioId: "",
  // });
  const navigate = useNavigate();

  const [direccion, setDireccion] = useState("");
  const [fecha, setFecha] = useState(Date);

  const handleDirectionChange = async () => {
    try {
      const response = await crearPresupuestoService();
      setDireccion(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleDateChange = async () => {
    try {
      const response = await crearPresupuestoService();
      setFecha(response.data);
    } catch (error) {}
  };

  // const handlePreFormChange = (e) => {
  //   const formCopy = { ...form };

  //   formCopy[e.target.value] = e.target.value;

  //   setForm(formCopy);
  // };
  // const handleAddPresupuesto = async () => {
  //   try {
  //     const presupuesto = {
  //       form,
  //     };
  //     console.log(presupuesto);
  //     const response = await crearPresupuestoService();

  //     console.log(response);

  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //     navigate("/error");
  //   }
  // };

  return (
    <div>
      <br />

      <label>Dirección:</label>
      <input
        type="text"
        name="direccion"
        value={direccion}
        onChange={handleDirectionChange}
      />
      <br />

      <label>Fecha:</label>
      <input
        type="date"
        name="fecha"
        value={fecha}
        onChange={handleDateChange}
      />
      <br />

      {/* <button onClick={handleAddPresupuesto}>Solicitar Presupuesto</button> */}
    </div>
    //   <br />
    //   <label>Pais:</label>
    //   <input
    //     type="text"
    //     name="pais"
    //     value={form.pais}
    //     onChange={handlePreFormChange}
    //   />
    //   <br />
    //   <label>Provincia:</label>
    //   <input
    //     type="text"
    //     name="provincia"
    //     value={form.provincia}
    //     onChange={handlePreFormChange}
    //   />
    //   <br />
    //   <label>Población:</label>
    //   <input
    //     type="text"
    //     name="poblacion"
    //     value={form.poblacion}
    //     onChange={handlePreFormChange}
    //   />
    //   <br />
    //   <label>calle:</label>
    //   <input
    //     type="text"
    //     name="calle"
    //     value={form.calle}
    //     onChange={handlePreFormChange}
    //   />
    //   <br />
    //   <label>numero:</label>
    //   <input
    //     type="number"
    //     name="numero"
    //     value={form.numero}
    //     onChange={handlePreFormChange}
    //   />
    //   <br />
    //   <label>piso:</label>
    //   <input
    //     type="text"
    //     name="piso"
    //     value={form.piso}
    //     onChange={handlePreFormChange}
    //   />
    //   <br />
    //   <label>Observaciones:</label>
    //   <input
    //     type="text"
    //     name="observaciones"
    //     value={form.observaciones}
    //     onChange={handlePreFormChange}
    //   />
    //   <br />
    //   <label>Numero de Empleados:</label>
    //   <input
    //     type="text"
    //     name="numEmpleados"
    //     value={form.numEmpleados}
    //     onChange={handlePreFormChange}
    //   />
    //   <br />
    //   <label>Metros cuadrados:</label>
    //   <input
    //     type="text"
    //     name="metro2"
    //     value={form.metro2}
    //     onChange={handlePreFormChange}
    //   />
    //   <br />
    //   <label>Precio:</label>
    //   <input
    //     type="text"
    //     name="precio"
    //     value={form.precio}
    //     onChange={handlePreFormChange}
    //   />
    //   <br />
    //   <label>servicioId:</label>
    //   <input
    //     type="text"
    //     name="servicioId"
    //     value={form.servicioId}
    //     onChange={handlePreFormChange}
    //   />
    //   <br />
    //   <button onClick={handleAddPresupuesto}>Solicitar Presupuesto</button>
    // </div>
  );
}

export default Presupuestos;
