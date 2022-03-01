import axios from "axios";

const URL = `${process.env.REACT_APP_WEBSITE_NAME}productos`;

//obtener todos los productos
const obtenerProductos = async () => {
  try {
    let { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
//obtener productos por busqueda
const obtenerProductosPorBusqueda = async (busqueda = "") => {
  try {
    let { data } = await axios.get(`${URL}/?search=${busqueda}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//obtener productos limitado por la cantidad y por pagina
const obtenerProductosPorPagina = async (pagina = 1, limite = 9) => {
  try {
    let { data } = await axios.get(`${URL}?page=${pagina}&limit=${limite}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//obtener productos por Id
const obtenerProductoPorId = async (id) => {
  try {
    let { data } = await axios.get(`${URL}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  obtenerProductosPorPagina,
  obtenerProductos,
  obtenerProductoPorId,
  obtenerProductosPorBusqueda,
};
