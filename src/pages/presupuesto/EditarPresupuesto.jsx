import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  detallesPresupuestoService,
  EditarPresupuestoService,
} from "../../services/presupuestos.sevices";

function EditarPresupuesto() {
  const [fecha, setFecha] = useState("");
  const [direction, setDirection] = useState("");
  const [pais, setPais] = useState("");
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

  const handleImgChange = (e) => setImg(e.target.value);
  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleBreveDescChange = (e) => setBreveDesc(e.target.value);
  const handleDescripcionChange = (e) => setDescripcion(e.target.value);
  const handleUtilidadesChange = (e) => setUtilidades(e.target.value);

  const handleEditarServicio = async () => {
    try {
      const servicios = {
        img,
        nombre,
        breveDesc,
        descripcion,
        utilidades,
      };
      await editarServicioService(id, servicios);
      navigate(`/servicios/${id}`);
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data);
      } else {
        navigate("/error");
      }
    }
  };

  useEffect(() => {
    getDetailsServicios();
  }, []);

  const getDetailsServicios = async () => {
    try {
      const response = await detallesServicioService(id);
      const { img, nombre, breveDesc, descripcion, utilidades } = response.data;

      setImg(img);
      setNombre(nombre);
      setBreveDesc(breveDesc);
      setDescripcion(descripcion);
      setUtilidades(utilidades);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <label>Imagen:</label>
      <input type="img" name="img" value={img} onChange={handleImgChange} />
      <br />

      <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={nombre}
        onChange={handleNombreChange}
      />
      <br />
      <label>Descripción breve:</label>
      <input
        type="text"
        name="breveDesc"
        value={breveDesc}
        onChange={handleBreveDescChange}
      />
      <br />
      <label>Descripción:</label>
      <input
        type="text"
        name="descripcion"
        value={descripcion}
        onChange={handleDescripcionChange}
      />
      <br />
      <label>Utilidades:</label>
      <input
        type="text"
        name="utilidades"
        value={utilidades}
        onChange={handleUtilidadesChange}
      />
      <br />
      <button onClick={handleEditarServicio}>Añadir Servicio</button>

      {errorMessage !== null && <p>{errorMessage}</p>}
    </div>
  );
}

export default EditarS;