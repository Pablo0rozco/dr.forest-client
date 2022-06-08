import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listarPresupuestosService } from "../../services/presupuestos.services";
import { AuthContext } from "../../context/auth.context";
import { Link } from "react-router-dom";
function ListarPresupuesto() {
  const [presupuestoList, setPresupuestoList] = useState([]);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    getAllPresupuestos();
  }, []);

  const getAllPresupuestos = async () => {
    try {
      const response = await listarPresupuestosService();
      setPresupuestoList(response.data);
      console.log(response.data);
    } catch (error) {
      navigate("/error");
    }
  };
  console.log(presupuestoList);

  return (
    <div>
      <h1>Tus Presupuestos</h1>
      <table>
        <thead>
          <th>Fecha</th>
          <th>Provincia</th>
          <th>Calle</th>
          <th>Nº Empleados</th>
          <th>M²</th>
          <th>Nombre del Servicio</th>
          <th>Precio</th>
          <th>Estado</th>
        </thead>
        {presupuestoList.map((eachP) => {
          return (
            <tr>
              <td>{eachP.fecha.slice(0, 10)}</td>
              <td>{eachP.provincia}</td>
              <td>{eachP.calle}</td>
              <td>{eachP.numEmpleados}</td>
              <td>{eachP.metro2}</td>
              <td>{eachP.servicioId.nombre}</td>
              <td>
                {eachP.precio === undefined
                  ? "Pendiente de asignar precio"
                  : eachP.precio + "€"}
              </td>
              <td>{eachP.estado}</td>
              <Link to={`/presupuestos/editar/${eachP.servicioId._id}`}>
                Editar
              </Link>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ListarPresupuesto;
