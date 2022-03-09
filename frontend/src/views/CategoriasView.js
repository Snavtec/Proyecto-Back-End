import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { obtenerCategorias } from "../service/categoriaService";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CategoriasView() {
  const [categorias, setCategorias] = useState([]);

  const getCategorias = async () => {
    try {
      const catObtenidas = await obtenerCategorias();
      setCategorias(catObtenidas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <div
      className="container-fluid pt-5 pb-5"
      style={{ background: "#0B0D17" }}
    >
      <div className="container">
        <div className="row">
          {categorias.map((categoria, i) => (
            <div className="col-12 col-md-4 col-lg-4 mb-3" key={i}>
              <Card className="bg-dark text-white">
                <Card.Img
                  src={categoria.imagen}
                  alt={categoria.nombre}
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />
                <Card.ImgOverlay>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{ height: "100%" }}
                  >
                    <p className="h2">{categoria.nombre}</p>
                    <Card.Text>{categoria.descripcion}</Card.Text>
                    <Button variant="outline-light text-uppercase">
                      Ver mas
                      <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
                    </Button>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </div>
        <div className="row text-center">
          <div className="col-12">
            <Button variant="outline-light text-uppercase">
              Ver Todos los productos
              <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriasView;
