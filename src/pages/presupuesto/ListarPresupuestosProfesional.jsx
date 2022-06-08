import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { listarPresupuestosEmpresaService } from "../../services/presupuestos.services";

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

  return (
    <div>
      <h1>Tus Presupuestos</h1>
      <table>
        <thead>
          <th>Nombre</th>
        </thead>
        {presupuestoEmpresaList.map((eachP) => {
          return (
            <tr>
              <td>{eachP.estado}</td>
              <td>{eachP.estado}</td>
              <td>{eachP.estado}</td>
              <td>{eachP.estado}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ListarPresupuestosProfesional;
