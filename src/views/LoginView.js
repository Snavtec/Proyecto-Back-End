import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Button, Form } from "react-bootstrap";
import LoginImg from "../assets/login.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function LoginView() {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const recibirSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h2 className="text-uppercase text-center fw-bold my-3">
        Inicio de Sesión
      </h2>
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={LoginImg} alt="" />
        </div>
        <div className="col-12 col-md-6 ">
          <Form className="pt-3" onSubmit={handleSubmit(recibirSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un usuario"
                {...register("usuario", { required: true })}
              />
              {errors.usuario && (
                <small className="text-danger">Este Campo es obligatorio</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese una contraseña"
                {...register("password", { required: true })}
              />
              {errors.usuario && (
                <small className="text-danger">
                  Contraseña incorrecta o campo vacio
                </small>
              )}
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="primary" type="submit">
                Ingresar
              </Button>
              <Link className="text-secondary" to="/crearcuenta">
                Crear Cuenta
              </Link>
            </div>
          </Form>
          <p className="lead mt-3">
            Puedes Ingresar con google{" "}
            <span className="text-danger">
              <button
                className="text-uppercase text-danger botonfondoTransparante px-0"
                onClick={() => {
                  signIn();
                }}
              >
                Aqui
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
