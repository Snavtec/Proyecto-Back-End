import React, { useContext, useState } from "react";
import { CarritoContext } from "../context/carritoContext";
//import { MapContainer, TileLayer } from "react-leaflet";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { guardarVenta } from "../service/ventasService";

function ChekOutView() {
  const { carrito } = useContext(CarritoContext);
  const [coordenadas, setCoordenadas] = useState([-12.05543, -77.03858]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let total = 0;

  total = carrito.reduce((acum, prod) => {
    return acum + prod.cantidad * prod.precio;
  }, 0);

  const AnadirMarcador = () => {
    const map = useMapEvents({
      click: (e) => {
        // console.log("viendo useMapEvents", e);
        const { lat, lng } = e.latlng;
        setCoordenadas([lat, lng]);
      },
    });
    return null;
  };
  const recibirSubmit = async (data, e) => {
    //console.log(data);

    try {
      let nuevaVenta = {
        ...data,
        coordenadas,
        productos: carrito,
        total,
      };
      await guardarVenta(nuevaVenta);
      Swal.fire({
        icon: "success",
        title: "Venta Realizada!",
      });
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 my-3">
          <h3 style={{ color: "010D82" }}>Estas Comprando estos productos</h3>
          {carrito <= 0 ? (
            <p className="text-danger lead">
              No ha seleccionado ningun producto
            </p>
          ) : (
            <ul className="list-group cambiarcolores">
              {carrito.map((prod, i) => (
                <li
                  key={i}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <p className="h5 fw-bold">{prod.nombre}</p>
                    <small>Cantidad: {prod.cantidad}</small>
                  </div>
                  <div className="d-flex">
                    <p className="bg-success text-light rounded-pill px-3 mx-3">
                      S/. {(prod.cantidad * prod.precio).toFixed(2)}
                    </p>
                    <div>
                      <i class="fas fa-check text-success"></i>
                    </div>
                  </div>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {" "}
                <span className="fw-bold text-uppercase">Total:</span>{" "}
                <span className="fw-bold" style={{ color: "010D82" }}>
                  S/. {total.toFixed(2)}
                </span>
              </li>
            </ul>
          )}

          <h3 style={{ color: "010D82" }} className="mt-4">
            Recoge tu producto aqui:
          </h3>

          <MapContainer
            center={coordenadas}
            zoom={15}
            style={{ height: "400px" }}
          >
            {/* Tile Layer es la fuente de datos para leaflet */}
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AnadirMarcador />
            <Marker position={coordenadas} />
          </MapContainer>
        </div>
        <div className="col-12 col-md-12 col-lg-6 my-3">
          <h3 style={{ color: "010D82" }}>Ingrese sus datos por favor:</h3>
          <form onSubmit={handleSubmit(recibirSubmit)}>
            <div className="mb-2">
              <label className="form-label">Nombre y Apellido</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej. Julio lopez"
                {...register("nombreCompleto", { required: true })}
              />
              {errors.nombreCompleto && (
                <small className="text-danger">Este campo es obligatorio</small>
              )}
            </div>
            <div className="mb-2">
              <label className="form-label">Celular</label>
              <input
                type="number"
                className="form-control"
                placeholder="Ej. 955600712"
                {...register("celular", {
                  required: { value: true, message: "Es requerido" },
                  minLength: { value: 9, message: "Se requiere 9 digitos" },
                  maxLength: { value: 14, message: "Maximo 9 numeros" },
                })}
              />
              {errors.celular && (
                <small className="text-danger">{errors.celular.message}</small>
              )}
            </div>
            <div className="mb-2">
              <label className="form-label">Direccion</label>
              <input
                type="text"
                className="form-control"
                placeholder="SMP,MZ Q ......."
                {...register("direccion", { pattern: /^[A-Za-z0-9]/ })}
              />
              {errors.direccion && (
                <small className="text-danger">Solo se acepta letras</small>
              )}
            </div>
            <div className="mb-2">
              <label className="form-label">Nombre de la tarjeta</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej. Bcp..."
                {...register("tarjeta", { required: true })}
              />
              {errors.tarjeta && (
                <small className="text-danger">Solo se acepta letras</small>
              )}
            </div>
            <div className="mb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <label className="form-label">Mes</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ej. 01"
                    {...register("mes", { required: true })}
                  />
                  {errors.mes && (
                    <small className="text-danger">Solo se acepta letras</small>
                  )}
                </div>

                <div>
                  <label className="form-label">Año</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ej. 2019"
                    {...register("ano", { required: true })}
                  />
                  {errors.ano && (
                    <small className="text-danger">Solo se acepta letras</small>
                  )}
                </div>
                <div>
                  <label className="form-label">CVC</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ej. 2297"
                    {...register("cvc", { required: true })}
                  />
                  {errors.cvc && (
                    <small className="text-danger">Solo se acepta letras</small>
                  )}
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-success btn-lg">
              Pagar Ahora
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChekOutView;
