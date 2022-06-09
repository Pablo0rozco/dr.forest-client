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
    <div className="h-[100%] ">
      <h1 className="py-10">Tus Presupuestos</h1>
      <div className="flex flex-col justify-center items-center content-center align-items-center">
        <table
          className="w-full text-sm text-left text-gray-800 dark:text-white-400"
          id="table"
        >
          <thead className="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-50 dark:text-gray-800 border-b-4 border-black ">
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3">
              Provincia
            </th>
            <th scope="col" className="px-6 py-3">
              Calle
            </th>
            <th scope="col" className="px-6 py-3">
              Nº Empleados
            </th>
            <th scope="col" className="px-6 py-3">
              M²
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre del Servicio
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="px 0 py-3">
              Estado
            </th>
            <th></th>
          </thead>
          <tbody>
            {presupuestoList.map((eachP) => {
              return (
                <tr className="bg-white border-b dark:bg-green-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300 h-[200]">
                  <td className="px-6 py-4">{eachP.fecha.slice(0, 10)}</td>
                  <td className="px-6 py-4">{eachP.provincia}</td>
                  <td className="px-6 py-4">{eachP.calle}</td>
                  <td className="px-10 py-4">{eachP.numEmpleados}</td>
                  <td className="px-6 py-4">{eachP.metro2}</td>
                  <td className="px-6 py-4">{eachP.servicioId.nombre}</td>
                  <td className="px-6 py-4">
                    {eachP.precio === undefined
                      ? "Pendiente de asignar precio"
                      : eachP.precio + "€"}
                  </td>
                  <td>{eachP.estado}</td>
                  <td className="px-6 py-4">
                    <Link
                      id="table-button"
                      to={`/presupuestos/editar/${eachP._id}`}
                    >
                      <button>Editar</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarPresupuesto;
