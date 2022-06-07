import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { crearPresupuestoService } from "../../services/presupuestos.services.js";
import { detallesServicioService } from "../../services/servicios.sevices.js";

function Presupuestos() {
  const { id } = useParams();
  const [idPro, setIdPro] = useState("");

  const navigate = useNavigate();
  const [form, setForm] = useState({
    fecha: "",
    provincia: "",
    poblacion: "",
    calle: "",
    numero: "",
    piso: "",
    observaciones: "",
    numEmpleados: "",
    metro2: "",
    servicioId: id,
    profesionalId: idPro,
  });

  useEffect(() => {
    getDetalles();
  }, []);
  console.log(idPro);
  const getDetalles = async () => {
    try {
      const response = await detallesServicioService(id);

      setIdPro(response.data.idCreador);
    } catch (error) {
      navigate("/error");
      console.log(error);
    }
  };
  const handlePreFormChange = (e) => {
    const formCopy = { ...form };

    formCopy[e.target.name] = e.target.value;

    setForm(formCopy);
  };
  const handleAddPresupuesto = async () => {
    try {
      const response = await crearPresupuestoService(id, form);

      console.log(response);

      navigate("/crear/:id");
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  const provincias = [
    "Alava",
    "Albacete",
    "Alicante",
    "Almería",
    "Asturias",
    "Avila",
    "Badajoz",
    "Barcelona",
    "Burgos",
    "Cáceres",
    "Cádiz",
    "Cantabria",
    "Castellón",
    "Ciudad Real",
    "Córdoba",
    "La Coruña",
    "Cuenca",
    "Gerona",
    "Granada",
    "Guadalajara",
    "Guipúzcoa",
    "Huelva",
    "Huesca",
    "Islas Baleares",
    "Jaén",
    "León",
    "Lérida",
    "Lugo",
    "Madrid",
    "Málaga",
    "Murcia",
    "Navarra",
    "Orense",
    "Palencia",
    "Las Palmas",
    "Pontevedra",
    "La Rioja",
    "Salamanca",
    "Segovia",
    "Sevilla",
    "Soria",
    "Tarragona",
    "Santa Cruz de Tenerife",
    "Teruel",
    "Toledo",
    "Valencia",
    "Valladolid",
    "Vizcaya",
    "Zamora",
    "Zaragoza",
  ];

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
      <label>Provincia:</label>
      <select
        type="text"
        name="provincia"
        value={form.provincia}
        onChange={handlePreFormChange}
      >
        {provincias.map((eachP) => {
          return <option>{eachP}</option>;
        })}
      </select>

      <br />
      <label>Población:</label>
      <input
        type="text"
        name="poblacion"
        value={form.poblacion}
        onChange={handlePreFormChange}
      />
      <br />
      <label>Calle:</label>
      <input
        type="text"
        name="calle"
        value={form.calle}
        onChange={handlePreFormChange}
      />
      <br />
      <label>Numero:</label>
      <input
        type="number"
        name="numero"
        value={form.numero}
        onChange={handlePreFormChange}
      />
      <br />
      <label>Piso:</label>
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
      <button onClick={handleAddPresupuesto}>Solicitar Presupuesto</button>
    </div>
  );
}

export default Presupuestos;
