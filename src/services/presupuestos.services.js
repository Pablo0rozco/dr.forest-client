import service from "./config.services";

const crearPresupuestoService = (presupuesto) => {
  return service.post("/presupuestos/:id", presupuesto);
};

const listarPresupuestosService = (id) => {
  return service.get("/presupuestos",id);
};

const detallesPresupuestoService = (id) => {
  return service.get(`/presupuestos/${id}`);
};

const borrarPresupuestoService = (id) => {
  return service.delete(`/presupuestos/${id}`);
};

const EditarPresupuestoService = (id, presupuesto) => {
  return service.patch(`/presupuestos/${id}`, presupuesto);
};

export {
    crearPresupuestoService,
    listarPresupuestosService,
    detallesPresupuestoService,
    borrarPresupuestoService,
    EditarPresupuestoService,
};
