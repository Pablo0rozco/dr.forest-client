import service from "./config.services";

const editarPerfilService = ( perfilEditado) => {
  return service.patch('/perfil/editarPerfil', perfilEditado);
};

const uploadService = (uploadForm) => {
  return service.post("/uploader", uploadForm);
};

export { editarPerfilService };
