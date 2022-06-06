import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { detallesPresupuestoService, EditarPresupuestoService, borrarPresupuestoService} from "../../services/presupuestos.services.js";

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
  const [precio, setPrecio] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

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
        precio,
      };
      await EditarPresupuestoService(id, presupuestos);
      navigate(`presupuestos/editar/${id}`);
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data);
      } else {
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

    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <label>Fecha:</label>
      <input type="date" name="fecha" value={fecha} onChange={handleFechaChange} />
      <br />

      
      <br />
      
      <label>Provincia:</label>
      <input
        type="text"
        name="provincia"
        value={provincia}
        onChange={handleProvinciaChange}
      />
      <br />
      <label>Población:</label>
      <input
        type="text"
        name="poblacion"
        value={provincia}
        onChange={handlePoblacionChange}
      />
      <br />

      <label>Calle:</label>
      <input
        type="text"
        name="calle"
        value={calle}
        onChange={handleCalleChange}
      />
      <br />

      <label>Número:</label>
      <input
        type="text"
        name="numero"
        value={numero}
        onChange={handleNumeroChange}
      />
      <br />

      <label>Piso:</label>
      <input
        type="text"
        name="piso"
        value={piso}
        onChange={handlePisoChange}
      />
      <br />

      <label>Observaciones:</label>
      <input
        type="text"
        name="observaciones"
        value={observaciones}
        onChange={handleObservacionesChange}
      />
      <br />

      <label>Numero de empleados:</label>
      <input
        type="text"
        name="numEmpleados"
        value={numEmpleados}
        onChange={handleNumEmpleadosChange}
      />
      <br />

      <label>Metros cuadrados:</label>
      <input
        type="text"
        name="metro2"
        value={metro2}
        onChange={handleMetro2Change}
      />
      <br />

      <label>Precio:</label>
      <input
        type="text"
        name="precio"
        value={precio}
        onChange={handlePrecioChange}
      />
      <br />









      <button onClick={handleEditarPresupuesto}>Editar Presupuesto</button>

      {errorMessage !== null && <p>{errorMessage}</p>}
    </div>
  );
}

export default EditarPresupuesto;
