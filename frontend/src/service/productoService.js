import { URL as API } from "./axiosService";
import axios from "axios";

const URL = `${process.env.REACT_APP_WEBSITE_NAME}productos`;

const formatearProducto = (producto) => {
  return {
    ...producto,
    precio: parseFloat(producto.precio),
    categoria_id: producto.categoria,
    caracteristicas: producto.caracteristicas.map((carac) => carac.nombre),
  };
};

//obtener todos los productos
const obtenerProductos = async () => {
  try {
    let { data } = await API.get("productos");
    data = data.results.map((producto) => {
      return formatearProducto(producto);
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
//obtener productos por busqueda
const obtenerProductosPorBusqueda = async (busqueda = "") => {
  try {
    let { data } = await API.get(`productos/?search=${busqueda}`);
    return data.results.map((producto) => {
      return formatearProducto(producto);
    });
  } catch (error) {
    console.log(error);
  }
};

const obtenerNumeroDePaginas = async (limit) => {
  try {
    let { data } = await API.get("productos");
    return Math.ceil(data.count / limit);
  } catch (error) {
    console.log(error);
  }
};

//obtener productos limitado por la cantidad y por pagina
const obtenerProductosPorPagina = async (pagina = 1, limite = 9) => {
  try {
    let { data } = await API.get(
      `productos/?page=${pagina}&limit=${limite}&offset=${
        (pagina - 1) * limite
      }`
    );
    return data.results.map((producto) => {
      return formatearProducto(producto);
    });
  } catch (error) {
    console.log("Error fetching obtenerProductosPorPagina", error);
  }
};

//obtener productos por Id
const obtenerProductoPorId = async (id) => {
  try {
    let { data } = await API.get(`productos/${id}`);
    data = {
      ...data,
      categoria_id: data.categoria,
      precio: parseFloat(data.precio),
      caracteristicas: data.caracteristicas.map((carac) => carac.nombre),
    };
    console.log("[productoID]", data);
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
  obtenerNumeroDePaginas,
};
