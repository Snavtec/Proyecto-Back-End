import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { obtenerProductoPorId } from "../service/productoService";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CarritoContext } from "../context/carritoContext";

import Swal from "sweetalert2";
import { AuthContext } from "../context/authContext";

function ProductoDetalleView() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { id } = useParams();

  /* console.log("soy id", id);*/

  const [producto, setProducto] = useState({});
  const [caracteristicas, setCaracteristicas] = useState([]);

  const [cantidad, setCantidad] = useState(1);
  //const navigate = useNavigate();

  const { anadirACarrito } = useContext(CarritoContext);

  const getData = async () => {
    try {
      const productoPorId = await obtenerProductoPorId(id);
      // console.log("caracteristica", productoPorId.caracteristicas);
      const { caracteristicas } = productoPorId;
      //console.log("caracteristicas", caracteristicas);

      setCaracteristicas(caracteristicas);
      setProducto(productoPorId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const validarUsuario = () => {
    if (user) {
      navigate("/chekout");
    } else {
      try {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Necesita ingresar/registrarse para comprar!",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const anadirACarritoContext = () => {
    const { id, nombre, precio, imagen } = producto;
    console.log("ver datos del producto", id, nombre, precio);

    const nuevoProducto = {
      id,
      nombre,
      precio,
      imagen,
      cantidad,
    };

    anadirACarrito(nuevoProducto);
  };

  return (
    <div className="container-fluid pt-4" style={{ background: "#e8e8e8" }}>
      <div className="container">
        <Card>
          <Card.Body>
            <div className="row">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <Card.Img variant="top w-75 img-fluid" src={producto.imagen} />
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <p className="h2" style={{ color: "#04001e" }}>
                    {producto.nombre}
                  </p>
                  <Card.Text
                    className="lead fw-light"
                    style={{ color: "#04001e" }}
                  >
                    S/.{producto.precio}
                  </Card.Text>
                  <Card.Text>{producto.descripcion}</Card.Text>
                  <div className="d-flex">
                    <Button
                      className="btn btn-success mx-2"
                      onClick={validarUsuario}
                    >
                      Comprar Ahora
                    </Button>
                    <Button
                      variant="outline-info"
                      onClick={anadirACarritoContext}
                    >
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Card.Text className="fw-bold mt-3" style={{ color: "#04001e" }}>
              Caracteristicas de {producto.nombre} :
            </Card.Text>
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 ">
                <ul className="list-group">
                  {caracteristicas.map((caract, i) => (
                    <li key={i} className="list-group-item ">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mx-2"
                        style={{ color: "#04001e" }}
                      />{" "}
                      {caract}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProductoDetalleView;
