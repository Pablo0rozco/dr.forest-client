import service from "./config.services";

const crearServicioService = (servicio) => {
  return service.post("/servicios", servicio);
};

const listarServiciosService = () => {
  return service.get("/servicios");
};

const detallesServicioService = (id) => {
  return service.get(`/servicios/${id}`);
};

const borrarServicioService = (id) => {
  return service.delete(`/servicios/${id}`);
};

const editarServicioService = (id, servicio) => {
  return service.patch(`/servicios/${id}`, servicio);
};

export {
  crearServicioService,
  listarServiciosService,
  detallesServicioService,
  borrarServicioService,
  editarServicioService,
};
