import service from "./config.services";

const crearServicioService = (servicio) => {
  return service.post("/servicios", servicio);
};

const listarServiciosService = () => {
  return service.get("/api/servicios");
};

const detallesServicioservice = (id) => {
  return service.get(`/api/servicios/${id}`);
};

const borrarServicioService = (id) => {
  return service.delete(`/api/servicios/${id}`);
};

const EditarServicioService = (id, servicio) => {
  return service.delete(`/api/servicios/${id}`, servicio);
};

export {
  crearServicioService,
  listarServiciosService,
  detallesServicioservice,
  borrarServicioService,
  EditarServicioService,
};
