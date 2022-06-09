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
    <div className="home-container">
      <h1>Bienvenidos a Dr.Forest</h1>
      <p></p>

      <h2>Servicios:</h2>
      <div className="card-container">
        {allServices.map((eachService) => {
          return (
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-300 dark:border-gray-700  ">
              <img
                className="rounded-t-lg  w-full aspect-video "
                src={eachService.img}
                alt=""
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {eachService.nombre}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-black-400">
                  {eachService.breveDesc}
                </p>
                <p>Proveedor: {eachService.idCreador.rSocial}</p>
                <Link
                  to={`/servicios/${eachService._id}/detalles`}
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Ver Servicio
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
