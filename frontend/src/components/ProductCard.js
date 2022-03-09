import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/carritoContext";
function ProductCard({ producto }) {
  const { anadirACarrito } = useContext(CarritoContext);
  const [cantidad, setCantidad] = useState(1);

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
    <div className="mb-3">
      <Card>
        <Card.Body className="d-flex align-items-center justify-content-between">
          <Card.Img
            variant="top w-25 img-fluid"
            src={producto.imagen}
            className="img-fluid"
          />
          <div>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text className="lead fw-light">
              S/.{producto.precio}
            </Card.Text>
            <Card.Text>{producto.descripcion}</Card.Text>
          </div>
          <div className="d-flex flex-column">
            <Link
              className="btn btn-success mb-2"
              to={`/detalleproducto/${producto.id}`}
            >
              Ver Producto
            </Link>
            <Button variant="outline-info" onClick={anadirACarritoContext}>
              Agregar al carrito
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
