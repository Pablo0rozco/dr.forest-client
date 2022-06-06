import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listarPresupuestosService } from "../../services/presupuestos.services";
import { AuthContext } from "../../context/auth.context";
function ListarPresupuesto() {
  const [presupuestoList, setPresupuestoList] = useState(null);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    getAllPresupuestos();
  }, []);

  const getAllPresupuestos = async () => {
    const id = user._id;
    const response = await listarPresupuestosService(id);

    setPresupuestoList(response);
    console.log(response);
  };

  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default ListarPresupuesto;
