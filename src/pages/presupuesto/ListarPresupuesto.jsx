import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listarPresupuestosService } from "../../services/presupuestos.services";
import { AuthContext } from "../../context/auth.context";
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
    } catch (error) {
      navigate("/error");
    }
  };
  console.log(presupuestoList);

  return (
    <div>
      {presupuestoList.map((eachP) => {
        return (
          <div>
            <h2>{eachP.userId.username}</h2>
            <h2>{eachP.estado}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default ListarPresupuesto;
