import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context.js";
import {
  detallesPresupuestoService,
  EditarPresupuestoService,
  borrarPresupuestoService,
} from "../../services/presupuestos.services.js";

function EditarPresupuesto() {
  const [fecha, setFecha] = useState("");

  const [provincia, setProvincia] = useState("");
  const [poblacion, setPoblacion] = useState("");
  const [calle, setCalle] = useState(null);

  const [numero, setNumero] = useState("");
  const [piso, setPiso] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [numEmpleados, setNumEmpleados] = useState("");
  const [metro2, setMetro2] = useState("");
  const [estado, setEstado] = useState(null);
  const [precio, setPrecio] = useState(0);
  const [nombreUsuario, setNombreUsuario] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  const { user } = useContext(AuthContext);

  const handleFechaChange = (e) => setFecha(e.target.value);

  const handleProvinciaChange = (e) => setProvincia(e.target.value);
  const handlePoblacionChange = (e) => setPoblacion(e.target.value);
  const handleCalleChange = (e) => setCalle(e.target.value);
  const handleNumeroChange = (e) => setNumero(e.target.value);
  const handlePisoChange = (e) => setPiso(e.target.value);
  const handleObservacionesChange = (e) => setObservaciones(e.target.value);
  const handleNumEmpleadosChange = (e) => setNumEmpleados(e.target.value);
  const handleMetro2Change = (e) => setMetro2(e.target.value);
  const handlePrecioChange = (e) => setPrecio(e.target.value);
  const handleEstadoChange = (e) => setEstado(e.target.value);
  console.log(estado);

  const handleEditarPresupuesto = async () => {
    try {
      const presupuestos = {
        fecha,
        provincia,
        poblacion,
        calle,
        numero,
        piso,
        observaciones,
        numEmpleados,
        metro2,
        estado,
        precio,
      };
      const response = await EditarPresupuestoService(id, presupuestos);
      console.log(response.data);
      if (user.userType === "cliente") {
        navigate("/presupuestos");
      } else {
        navigate("/presupuestos/empresa");
      }
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data);
      } else {
        console.log(error);
        navigate("/error");
      }
    }
  };

  useEffect(() => {
    getDetailsPresupuestos();
  }, []);

  const getDetailsPresupuestos = async () => {
    try {
      const response = await detallesPresupuestoService(id);
      const {
        fecha,
        provincia,
        poblacion,
        calle,
        numero,
        piso,
        observaciones,
        numEmpleados,
        metro2,
        precio,
        estado,
        userId,
      } = response.data;

      setFecha(fecha);

      setProvincia(provincia);
      setPoblacion(poblacion);
      setCalle(calle);
      setPrecio(precio);
      setNumEmpleados(numEmpleados);
      setNumero(numero);
      setPiso(piso);
      setObservaciones(observaciones);
      setMetro2(metro2);
      setPrecio(precio);
      setNombreUsuario(userId);
      setEstado(estado);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div id="container">
      {user.userType === "cliente" && (
        <div id="contact_form">
          <div className="fecha">
            <label>Fecha:</label>
            <input
              type="date"
              name="fecha"
              value={fecha}
              onChange={handleFechaChange}
            />
          </div>
          <br />
          <div className="numero">
            <label>Provincia:</label>
            <input
              type="text"
              name="provincia"
              value={provincia}
              onChange={handleProvinciaChange}
            />
          </div>
          <br />
          <div className="numero">
            <label>Población:</label>
            <input
              type="text"
              name="poblacion"
              value={poblacion}
              onChange={handlePoblacionChange}
            />
          </div>
          <br />
          <div className="numero">
            <label>Calle:</label>
            <input
              type="text"
              name="calle"
              value={calle}
              onChange={handleCalleChange}
            />
          </div>
          <br />
          <div className="numero">
            <label>Número:</label>
            <input
              type="text"
              name="numero"
              value={numero}
              onChange={handleNumeroChange}
            />
          </div>
          <br />
          <div className="numero">
            <label>Piso:</label>
            <input
              type="text"
              name="piso"
              value={piso}
              onChange={handlePisoChange}
            />
          </div>
          <br />
          <div className="observaciones">
            <label>Observaciones:</label>
            <input
              type="text"
              name="observaciones"
              value={observaciones}
              onChange={handleObservacionesChange}
            />
          </div>
          <br />
          <div className="input">
            <label>Numero de empleados:</label>
            <input
              type="text"
              name="numEmpleados"
              value={numEmpleados}
              onChange={handleNumEmpleadosChange}
            />
          </div>
          <br />
          <div className="input">
            <label>Metros cuadrados:</label>
            <input
              type="text"
              name="metro2"
              value={metro2}
              onChange={handleMetro2Change}
            />
          </div>
          <div>
            <button id="form_button" onClick={handleEditarPresupuesto}>
              Editar Presupuesto
            </button>
          </div>
        </div>
      )}
      <br />
      {user.userType === "profesional" && (
        <div>
          <div>
            <h3>Asignar Estado:</h3>
            <label>✔️</label>

            <input
              type="radio"
              name="estado"
              value="✔️"
              onChange={handleEstadoChange}
            />
            <label>❌</label>
            <input
              type="radio"
              name="estado"
              value="❌"
              onChange={handleEstadoChange}
            />
          </div>
          <br />
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            value={precio}
            onChange={handlePrecioChange}
          />
          <br />
          <div id="form_button">
            <button onClick={handleEditarPresupuesto}>
              Enviar Presupuesto a {nombreUsuario.username}
            </button>
          </div>
        </div>
      )}

      {errorMessage !== null && <p>{errorMessage}</p>}
    </div>
  );
}

export default EditarPresupuesto;
