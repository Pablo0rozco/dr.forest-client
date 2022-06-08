import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  EditarPresupuestoService,
  listarPresupuestosEmpresaService,
} from "../../services/presupuestos.services";
import { Link } from "react-router-dom";
function ListarPresupuestosProfesional() {
  const [presupuestoEmpresaList, setPresupuestoEmpresaList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getEmpresaPresupuestos();
  }, []);

  const getEmpresaPresupuestos = async () => {
    try {
      const response = await listarPresupuestosEmpresaService();
      setPresupuestoEmpresaList(response.data);
      console.log(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  const formatearFecha = (fecha) => {
    fecha.split("-").reverse().join("-");
  };

  return (
    <div>
      <h1>Tus Solicitudes:</h1>

      {presupuestoEmpresaList.map((eachP) => {
        return (
          <div>
            <h2>Datos del Cliente</h2>
            <h3> {eachP.userId.username}</h3>
            <h3> {eachP.userId.email}</h3>
            <h3> {eachP.userId.tel}</h3>

            <hr />

            <h2>Datos de la Solicitudes</h2>
            <h3>Servicio: {eachP.servicioId.nombre} </h3>
            <p>{eachP.fecha.slice(0, 10)}</p>
            <p>{eachP.provincia}</p>
            <p>{eachP.poblacion}</p>
            <p>{eachP.calle}</p>
            <p>{eachP.piso}</p>
            <p>{eachP.numero}</p>
            <p>{eachP.numEmpleados} Empleados</p>
            <p>{eachP.metro2} M²</p>
            <p>{eachP.descripcion}</p>
            <p>Estado</p>
            <Link to={`/presupuestos/editar/${eachP._id}`}>
              <button>Asignar Estado y precio:</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ListarPresupuestosProfesional;
