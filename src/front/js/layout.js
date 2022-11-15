import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";
import { Login } from "./pages/paginalogin";
import Protectoralogin from "./pages/protectoralogin";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Editusuario } from "./pages/editusuario";
import Recuperacioncontrasena from "./pages/recuperacioncontrasena";
import Casaacogida from "./pages/casaacogida";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Contacto } from "./pages/formulariocontacto";
import { Navbar } from "./component/navbar";
import { Registro } from "./pages/registro";
import { Perfilprotectora } from "./pages/perfilprotectora";

import { FormularioPets } from "./component/formulariopets";
import { Perfilusuario } from "./pages/perfilusuario";
import { Footer } from "./component/footer";
import Mapahome from "./pages/mapahome";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const path = window.location.pathname;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />

          <Route element={<Demo />} path="/demo" />
          <Route element={<Login />} path="/login" />
          <Route element={<Registro />} path="/register" />
          <Route element={<Contacto />} path="/contacto" />
          <Route element={<Mapahome />} path="/mapahome" />
          <Route element={<Perfilusuario />} path="/perfilusuario" />
          <Route element={<Perfilprotectora />} path="/perfilprotectora" />
          <Route element={<Protectoralogin />} path="/protectoralogin" />
          <Route element={<Editusuario />} path="/editusuario" />
          <Route
            element={<Recuperacioncontrasena />}
            path="/recuperacioncontrasena"
          />
          <Route element={<Casaacogida />} path="/casaacogida" />
          <Route element={<FormularioPets />} path="/formulariopets" />
          <Route element={<Single />} path="/single/:theid" />
          <Route element={<h1>Not found!</h1>} />
          <Route element={<Protectoralogin />} path="/protectoralogin" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
