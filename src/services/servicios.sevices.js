import service from "./config.services";

const crearService = (servicio) => {
    return service.post("/api/servicios", servicio)
}

const listarServiciosService = () => {
    return service.get("/api/servicios")
}

const borrarService = () => {
    return service.get("/auth/verify")
} //! Necesitaremos configurar el envio del token