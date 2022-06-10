import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  detallesServicioService,
  editarServicioService,
} from "../../services/servicios.sevices";
import PacmanLoader from "react-spinners/PacmanLoader";

function EditarS() {
  const [img, setImg] = useState("");
  const [nombre, setNombre] = useState("");
  const [breveDesc, setBreveDesc] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [utilidades, setUtilidades] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

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
      navigate(`/servicios/${id}/detalles`);
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

  if (
    img === null ||
    nombre === null ||
    breveDesc === null ||
    descripcion === null ||
    utilidades === null
  ) {
    return (
      <div>
        <br />
        <br />
        <h2>Conectando con el servidor</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <PacmanLoader />
      </div>
    );
  }

  return (
    <div id="container h-[100%] ">
      <div className="contact_form">
        <label>Imagen:</label>
        <input type="text" name="img" value={img} onChange={handleImgChange} />
      </div>

      <br />

      <div className="name">
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>

      <div className="name">
        <label>Descripción breve:</label>
        <input
          type="text"
          name="breveDesc"
          value={breveDesc}
          onChange={handleBreveDescChange}
        />
      </div>

      <div className="observaciones">
        <label>Descripción:</label>
        <input
          type="text"
          name="descripcion"
          value={descripcion}
          onChange={handleDescripcionChange}
        />
      </div>

      <label>Utilidades:</label>
      <input
        type="text"
        name="utilidades"
        value={utilidades}
        onChange={handleUtilidadesChange}
      />
      <br />
      <div id="form_button">
        <button onClick={handleEditarServicio}>Guardar Cambios</button>
      </div>

      {errorMessage !== null && <p>{errorMessage}</p>}
    </div>
  );
}

export default EditarS;
