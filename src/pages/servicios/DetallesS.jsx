import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  detallesServicioService,
  borrarServicioService,
} from "../../services/servicios.sevices";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { listaProfesionalesService } from "../../services/auth.services";
import PacmanLoader from "react-spinners/PacmanLoader";

function DetallesS() {
  const [detalles, setDetalles] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { isCliente, isProfesional } = useContext(AuthContext);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await detallesServicioService(id);
      setDetalles(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleDelete = async () => {
    try {
      await borrarServicioService(id);
      navigate("/");
    } catch (error) {
      navigate("/error");
      console.log(error.response);
    }
  };

  if (detalles === null) {
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
    <div className="perfil-detail">
      <h1>&bull; {detalles.nombre} &bull;</h1>

      <img src={detalles.img} alt="" />
      <br />

      <h2>{detalles.breveDesc}</h2>
      <p>{detalles.descripcion}</p>
      <p>{detalles.utilidades}</p>
      {isCliente && (
        <Link to={`/presupuestos/crear/${id}`}>
          <button id="form_button">Pedir presupuesto</button>
        </Link>
      )}

      {isProfesional && (
        <div>
          <Link to={`/servicios/${id}/editar`}>
            <button id="form_button">Editar Servicio</button>
          </Link>

          <button id="form_button" onClick={handleDelete}>
            Borrar el servicio
          </button>
        </div>
      )}
    </div>
      
    </div>
  );
}

export default DetallesS;
