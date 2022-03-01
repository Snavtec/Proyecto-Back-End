import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
//import Acordeon from "./views/Acordeon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./views/Navbar";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import CrearCuentaView from "./views/CrearCuentaView";
import ProductosConFiltroView from "./views/ProductosConFiltroView";
import ProductoDetalleView from "./views/ProductoDetalleView";
import ChekOutView from "./views/ChekOutView";
import PrivateRoute from "./components/PrivateRoute";
import FooterView from "./views/FooterView";
import ConocenosView from "./views/ConocenosView";

import { AuthContextProvider } from "./context/authContext";
import { CarritoContextProvider } from "./context/carritoContext";

function App() {
  return (
    <AuthContextProvider>
      <CarritoContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/crearcuenta" element={<CrearCuentaView />} />
            <Route path="/conocenos" element={<ConocenosView />} />
            <Route
              path="/chekout"
              element={
                <PrivateRoute>
                  <ChekOutView />
                </PrivateRoute>
              }
            />
            <Route
              path="/detalleproducto/:id"
              element={<ProductoDetalleView />}
            />

            <Route path="/productosfiltros">
              <Route
                path="/productosfiltros"
                element={<ProductosConFiltroView />}
              />

              {/* <Route
                path="/productosfiltros/?search=:busqueda"
                element={<ProductosConFiltroView />}
              /> */}
              <Route
                path="/productosfiltros/:busqueda"
                element={<ProductosConFiltroView />}
              />
            </Route>
          </Routes>
          <FooterView />
        </Router>
      </CarritoContextProvider>
    </AuthContextProvider>
  );
}

export default App;
