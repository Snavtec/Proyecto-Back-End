import { URL } from "./axiosService";

//buscar todos o filtrar
const obtenerCategorias = async () => {
  try {
    let { data } = await URL.get("categorias");
    return data.results;
  } catch (error) {
    throw error;
  }
};

export { obtenerCategorias };
