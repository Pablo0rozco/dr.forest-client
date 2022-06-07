import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { listarPresupuestosEmpresaService } from "../../services/presupuestos.services";

function ListarPresupuestosProfesional() {
  const [presupuestoEmpresaList, setPresupuestoEmpresaList] = useState([]);
  const { user } = useContext(AuthContext);
 

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

      {presupuestoEmpresaList.map((eachP) => {
        return (
          <div>
            <h2>{eachP.userId.username}</h2>
            <h2>{eachP.userId.username}</h2>
            <h2>{eachP.userId.username}</h2>
            <h2>{eachP.userId.username}</h2>
            <h2>{eachP.estado}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default ListarPresupuestosProfesional;
