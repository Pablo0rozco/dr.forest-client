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
    <div className="PresupuestosEmpresa h-[100%] ">
      <h1>Tus Solicitudes</h1>
      <div className="card-container">
        {presupuestoEmpresaList.map((eachP) => {
          return (
            <div className="card">
              <h2>Datos del Cliente:</h2>
              <h3>Solicitante: {eachP.userId.username}</h3>
              <h3>Email {eachP.userId.email}</h3>
              <h3>Nº de Contacto: {eachP.userId.tel}</h3>

              <hr />
              <br />
              <h2>Datos de la Solicitudes</h2>
              <h3>Servicio: {eachP.servicioId.nombre} </h3>
              <p>Fecha: {eachP.fecha.slice(0, 10)}</p>
              <p>Provincia: {eachP.provincia}</p>
              <p>Población: {eachP.poblacion}</p>
              <p>Calle: {eachP.calle}</p>
              <p>Piso: {eachP.piso}</p>
              <p>Nº {eachP.numero}</p>
              <p> Nº Empleados: {eachP.numEmpleados} </p>
              <p>M² : {eachP.metro2} </p>
              <p>Observaciones: {eachP.descripcion}</p>
              <br />
              <Link to={`/presupuestos/editar/${eachP._id}`}>
                <button>Asignar Estado y precio</button>
              </Link>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListarPresupuestosProfesional;
