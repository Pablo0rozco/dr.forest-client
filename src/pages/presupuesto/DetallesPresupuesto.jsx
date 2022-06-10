import React from "react";
import { useState, useEffect } from "react";
import {
  detallesPresupuestoService,
  borrarPresupuestoService,
} from "../../services/presupuestos.services.js";
import { useParams, useNavigate, Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

function DetallesPresupuesto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [presupuestoDetalles, setPresupuestoDetalles] = useState(null);

  useEffect(() => {
    detallesPresupuesto();
  }, []);

  const detallesPresupuesto = async () => {
    try {
      const response = await detallesPresupuestoService(id);
      setPresupuestoDetalles(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleDelete = async () => {
    try {
      await borrarPresupuestoService(id);
      navigate(`/presupuestos/${id}`);
    } catch (error) {}
  };

  if (presupuestoDetalles === null) {
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
    <div>
      <h3>Detalles del Presupuesto</h3>

      <h4>Servicio: {presupuestoDetalles.direccion}</h4>
      <button onClick={handleDelete}>Borrar</button>
      <Link to={`/presupuestos/editar/${id}`}>
        <button>Editar</button>
      </Link>
    </div>
  );
}

export default DetallesPresupuesto;
