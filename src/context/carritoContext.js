import { createContext, useEffect, useState } from "react";

//crear context
export const CarritoContext = createContext();

//creamos el provider

export const CarritoContextProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  const anadirACarrito = (nuevoProducto) => {
    const existe = carrito.findIndex((prod) => prod.id === nuevoProducto.id);
    //-1 si no existe , si existe te devuelve el indice donde lo encontro
    if (existe === -1) {
      setCarrito([...carrito, nuevoProducto]);
    } else {
      //si existe , modifico segun su posicion
      let carritoTemp = [...carrito];
      //solamente modifico la propiedad cantidad
      carritoTemp[existe].cantidad =
        carritoTemp[existe].cantidad + nuevoProducto.cantidad;
      setCarrito(carritoTemp);
    }
  };
  const limpiarCarrito = () => {
    setCarrito([]);
  };

  useEffect(() => {
    const carritoStorage = JSON.parse(localStorage.getItem("appCarrito"));
    if (carritoStorage.length > 0) {
      setCarrito(carritoStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("appCarrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CarritoContext.Provider
      value={{ anadirACarrito, carrito, limpiarCarrito }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};
