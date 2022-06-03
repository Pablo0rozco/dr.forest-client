import service from "./config.services";

const crearPresupuestoService = (presupuesto) => {
  return service.post("/presupuestos", presupuesto);
};

const listarPresupuestosService = () => {
  return service.get("/presupuestos");
};

const detallesPresupuestoService = (id) => {
  return service.get(`/presupuestos/${id}`);
};

const borrarPresupuestoService = (id) => {
  return service.delete(`/presupuestos/${id}`);
};

const EditarPresupuestoService = (id, presupuesto) => {
  return service.delete(`/presupuestos/${id}`, presupuesto);
};

export {
    crearPresupuestoService,
    listarPresupuestosService,
    detallesPresupuestoService,
    borrarPresupuestoService,
    EditarPresupuestoService,
};
