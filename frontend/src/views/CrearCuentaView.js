import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createAccount, login, getUserProfile } from "../service/authService";
import { AuthContext } from "../context/authContext";

function CrearCuentaView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { customSignIn } = useContext(AuthContext);

  const recibirSubmit = async (data) => {
    console.log(data);
    try {
      let res = await createAccount(data);
      // check if response is ok
      console.log("response from account creation", res);
      let creds = await login({
        email: data.email,
        password: data.password,
      });
      console.log("user tokens", creds);
      // Save tokens to localStorage
      localStorage.setItem("accessToken", creds.access);
      localStorage.setItem("refreshToken", creds.refresh);
      // get user profile and set it to context
      const user = await getUserProfile();
      await customSignIn(user);
      // redirect to products
      navigate("/productosfiltros");
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <>
      <p className="h2 text-uppercase text-center fw-bold my-3">CREAR CUENTA</p>
      <div className="container-fluid" style={{ marginBottom: "180px" }}>
        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-6"
            style={{ margin: "0 auto" }}
          >
            <Form className="pt-3 " onSubmit={handleSubmit(recibirSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un nombre"
                  {...register("first_name", { required: true })}
                />
                {errors.first_name && (
                  <small className="text-danger">
                    Este Campo es obligatorio
                  </small>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese Nombre"
                  {...register("last_name", { required: true })}
                />
                {errors.last_name && (
                  <small className="text-danger">
                    Este Campo es obligatorio
                  </small>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese Correo electronico"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <small className="text-danger">
                    Este Campo es obligatorio
                  </small>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese una contraseña"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <small className="text-danger">
                    Contraseña incorrecta o campo vacio
                  </small>
                )}
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="success" type="submit">
                  Registrarse
                </Button>
                <Link className="text-secondary" to="/login">
                  Cancelar
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrearCuentaView;
