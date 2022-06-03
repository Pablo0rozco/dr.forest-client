import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listarServiciosService } from "../services/servicios.sevices";
import { Link } from "react-router-dom";

function Home() {
  const [allServices, setAllServices] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getAllServicios();
  }, []);

  const getAllServicios = async () => {
    try {
      const response = await listarServiciosService();
      setAllServices(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };
  if (allServices === null) {
    return <h3>..loaidng</h3>;
  }
  return (
    <div>
      <h1>Bienvenidos a Dr.Forest</h1>

      <h2>Los Servicios:</h2>
      {allServices.map((eachService) => {
        return (
          <Link to={`/servicios/${eachService._id}/detalles`}>
            {" "}
            <div>
              <h2>{eachService.nombre} </h2>
              <img src={eachService.img} alt="" />
              <p>{eachService.breveDesc} </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
