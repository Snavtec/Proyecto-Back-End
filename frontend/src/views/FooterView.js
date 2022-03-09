import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function FooterView() {
  return (
    <footer
      className="bg-dark text-light pt-5 pb-3"
      style={{ position: "relative", width: "100%", bottom: "0" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 pb-2">
            <Link
              className="fw-bold text-black"
              to="/"
              style={{ textDecoration: "none" }}
            >
              <span className="text-primary">Mc</span>
              ProductosTech
            </Link>
            <p>Lima - Perú</p>
            <small>2021 Derechos Reservados</small>
            <br />
            <br />
            <i
              class="fab fa-twitter"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            ></i>
            <i
              class="fab fa-instagram mx-3"
              style={{ fontSize: "1.2rem", cursor: "pointer" }}
            ></i>
          </div>
          <div className="col-12 col-md-6 col-lg-3 pb-2">
            <h2>Empresa</h2>
            <small>Nosotros</small>
            <br />
            <small>Contactanos</small>
          </div>
          <div className="col-12 col-md-6 col-lg-3 pb-2">
            <h2>Soporte</h2>
            <small>Terminos y condiciones</small>
            <br />
            <small>Politica de privacidad</small>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h2>Mantente Actualizado</h2>
            <d className="d-flex align-items-center">
              <input
                type="email"
                placeholder="Correo Electronico"
                className="form-control"
              />
              <button className="btn btn-primary">
                <FontAwesomeIcon icon={faPaperPlane} className="mx-1" />
              </button>
            </d>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterView;
