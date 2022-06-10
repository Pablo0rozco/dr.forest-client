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
    numEmpleados: 0,
    metro2: 0,
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

      navigate("/presupuestos");
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

      // 1º GENERAL CONTAINER
      <div id="container">

        {/* 2º TITULO DEL FORMULARIO */}
        <h1>&bull; Solicita tu presupuesto &bull;</h1>

        


        {/* 4º CONTACT FORM */}
              {/* FECHA */} 
              <br />

            <div id="contact_form">
            
              <div className="fecha">
                <label for="fecha">Fecha </label>
                <input type="date"  value={form.fecha} name="fecha" onChange={handlePreFormChange} id="fecha_input" required/>
              </div>


              {/* PROVINCIA */}
              <div className="numero">
                <label for="subject"></label>
                <select placeholder="Provincia" id="subject_input" required type="text"
                  name="provincia"
                  value={form.provincia}
                  onChange={handlePreFormChange}>
                  {provincias.map((eachP) => {
                    return <option>{eachP}</option>;
                  })}
                </select>
              </div>

              {/* POBLACION */}
              <div className="numero">
                <label for="poblacion"></label>
                <input className="placeholder:text-black" type="text" placeholder="Población" name="poblacion" id="poblacion_input" required value={form.poblacion}
                  onChange={handlePreFormChange} />
              </div>

              {/* CALLE */}

              <div className="numero">
                <label for="calle"></label>
                <input className="placeholder:text-black" type="text" value={form.calle} onChange={handlePreFormChange} placeholder="Calle" name="calle" id="calle_input" required/>
              </div>


              {/* NUMERO */}
              <div className="numero">
                <label for="numero">Número </label>
                <input className="placeholder:text-black" type="number" value={form.numero} onChange={handlePreFormChange} name="numero" id="numero_input" required/>
              </div>


              {/* PISO */}

              <div className="numero">
                <label for="piso"></label>
                <input className="placeholder:text-black" type="text" value={form.piso} onChange={handlePreFormChange} placeholder="Piso" name="piso" id="piso_input" required/>
              </div>
              

              {/* OBSERVACIONES */}
              <div className="observaciones">
                <label for="observaciones"></label>
                <textarea className="placeholder:text-black" name="observaciones" placeholder="Comental al profesional cualquier información que consideres importante" id="message_input" cols="30" rows="5" required></textarea>
              </div>


              {/* NUMERO DE EMPLEADOS */}

              <div className="input">
                <label for="number">Número Empleados </label>
                <input className="placeholder:text-black" type="number" placeholder="Número de Empleados" value={form.numEmpleados} onChange={handlePreFormChange} name="numEmpleados" id="numEmpleados_input" required/>
              </div>

                  <br />

              {/* METROS CUADRADOS */}
              <div className="input">
                <label for="number">Metros Cuadrados </label>
                <input type="number" placeholder="Metros cuadrados" value={form.metro2} onChange={handlePreFormChange} name="metro2"  required/>
              </div>

              


              {/* BOTON */}
              <div id="form_button">
                <button onClick={handleAddPresupuesto} type="boton" value="Solicitar Presupuesto">Solicitar</button>
              </div>

            </div>
      </div>
    
  );
}

export default Presupuestos;
