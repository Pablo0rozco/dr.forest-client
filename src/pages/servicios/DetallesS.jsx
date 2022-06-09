import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  detallesServicioService,
  borrarServicioService,
} from "../../services/servicios.sevices";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { listaProfesionalesService } from "../../services/auth.services";

function DetallesS() {
  const [detalles, setDetalles] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

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
    return <h3>...Loading</h3>;
  }

  return (
    <div id="container">

<h1>&bull; {detalles.nombre} &bull;</h1>

     
      <img src={detalles.img} alt="" />
      <br />

      <h2>{detalles.breveDesc}</h2>
      <p>{detalles.descripcion}</p>
      <p>{detalles.utilidades}</p>
      {user.userType === "cliente" && (
        <Link to={`/presupuestos/crear/${id}`}>
          <button id="form_button">Pedir presupuesto</button>
        </Link>
      )}

      {user.userType === "profesional" && (
        <div>
          <Link to={`/servicios/${id}/editar`}>
            <button id="form_button">Editar Servicio</button>
          </Link>

          <button id="form_button" onClick={handleDelete}>Borrar el servicio</button>
        </div>
      )}
    </div>
  );
}

export default DetallesS;
