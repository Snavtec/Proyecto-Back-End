import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { obtenerCategorias } from "../service/categoriaService";
import { ListGroup, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import {
  obtenerProductosPorPagina,
  obtenerProductos,
  obtenerProductosPorBusqueda,
  obtenerNumeroDePaginas,
} from "../service/productoService";
function ProductosConFiltroView() {
  const [categorias, setCategorias] = useState([]);

  const [todosLosProductos, setTodosLosProductos] = useState([]);
  const [productos, setProductos] = useState([]); // este productos hace el recorrido

  const [limite, setLimite] = useState(8);
  const [pagina, setPagina] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);
  ///////
  //console.log("hola entraste a productos con filtros");
  const { busqueda } = useParams();
  // console.log("busqueda", busqueda);
  const [productosBuscados, setProductosBuscados] = useState([]);
  // console.log("productos buscados", productosBuscados);

  const getData = async () => {
    try {
      const totalProductos = await obtenerProductos();
      const numeroDePaginas = await obtenerNumeroDePaginas(9);
      const prodObtenidosPorPagina = await obtenerProductosPorPagina(
        pagina,
        limite
      );
      const catObtenidas = await obtenerCategorias();

      const productoPorBusqueda = await obtenerProductosPorBusqueda(busqueda);

      setCategorias(catObtenidas);
      if (busqueda) {
        setProductos(productoPorBusqueda);
      } else {
        setProductos(prodObtenidosPorPagina);
        setTodosLosProductos(totalProductos);
      }

      guardarTotalPaginas(numeroDePaginas);

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
  };

  //filtrar por categoria
  const filtarPorCategoria = (idCategoria) => {
    // console.log("entra a filtarPorCategoria");
    // console.log("id de categoria es", idCategoria);
    // console.log("aqui todos los productos", productos);
    const productosFiltrados = productos.filter(
      (producto) => producto.categoria_id === idCategoria
    );
    console.log("estos son los productos filtrados", productosFiltrados);
    setProductos(productosFiltrados);
    //setTodosLosProductos(productosFiltrados);
  };

  useEffect(() => {
    getData();
  }, [pagina, busqueda]);
  return (
    <div className="container-fluid " style={{ background: "#e8e8e8" }}>
      {/* jumbotron */}

      <div className="container jumbotron ">
        <div className="row pt-5">
          <div className="col-12 col-md-4 col-lg-4">
            <h3>Categorias</h3>
            <ListGroup as="ul">
              <Button
                variant="info my-1 text-uppercase fw-bolder"
                className="py-2"
                as="li"
                onClick={() => setProductos(todosLosProductos)}
              >
                TODAS LAS CATEGORIAS
              </Button>
              {categorias.map((cat, i) => (
                <Button
                  variant="info my-1 text-uppercase fw-bolder"
                  className="py-2"
                  as="li"
                  key={i}
                  onClick={() => {
                    filtarPorCategoria(cat.id);
                  }}
                >
                  {cat.nombre}
                </Button>
              ))}
            </ListGroup>
          </div>
          <div className="col-12 col-md-8 col-lg-8">
            <h3 className="text-center">Productos</h3>
            {productos.map((producto, i) => (
              <ProductCard producto={producto} key={i} />
            ))}
            <div className="col-12 d-flex justify-content-end mb-3">
              {pagina === 1 ? null : (
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => {
                    setPagina(pagina - 1);
                  }}
                >
                  Atras
                </button>
              )}
              {pagina === totalpaginas ? null : (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setPagina(pagina + 1);
                  }}
                >
                  Siguiente
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductosConFiltroView;
