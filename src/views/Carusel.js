import React from "react";
//import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
//import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Carusel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img5} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="text-uppercase my-2">
              Ultimos productos gamers del mercado
            </h3>
            <button className="text-uppercase text-light botonfondoTransparante">
              Ver Todos
              <FontAwesomeIcon icon={faArrowRight} className="mx-3" />
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-uppercase my-2">Teclados gamers</h5>
            <button className="text-uppercase text-light botonfondoTransparante">
              Ver Mas
              {/* <FontAwesomeIcon icon={faArrowRight} className="mx-3" /> */}
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-uppercase my-2">Monitores</h5>
            <button className="text-uppercase text-light botonfondoTransparante">
              Ver Mas
              {/*  <FontAwesomeIcon icon={faArrowRight} className="mx-3" /> */}
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img6} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-uppercase my-2">Monitores</h5>
            <button className="text-uppercase text-light botonfondoTransparante">
              Ver Mas
              {/*  <FontAwesomeIcon icon={faArrowRight} className="mx-3" /> */}
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carusel;
