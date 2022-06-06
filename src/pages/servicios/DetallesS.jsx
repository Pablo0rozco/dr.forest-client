import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  detallesServicioService,
  borrarServicioService,
} from "../../services/servicios.sevices";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

function DetallesS() {
  const [detalles, setDetalles] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await detallesServicioService(id);
      setDetalles(response.data);
      console.log(response.data);
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
      console.log(error.response.data);
    }
  };

  if (detalles === null) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <h2>{detalles.nombre}</h2>
      <img src={detalles.img} alt="" />
      <br />
      <small>{detalles.breveDesc}</small>
      <p>{detalles.descripcion}</p>
      <p>{detalles.utilidades}</p>
      <Link to={`/servicios/${id}/editar`}>
        <button>Editar Servicio</button>
      </Link>

      <button onClick={handleDelete}>Borrar servicio</button>

      <Link to={`/presupuestos/crear?id=${id}`}>
        <button>Pedir presupuesto</button>
      </Link>
    </div>
  );
}

export default DetallesS;
