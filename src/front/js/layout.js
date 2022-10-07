import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";
import { Login } from "./pages/paginalogin";
import Protectoralogin from "./pages/protectoralogin";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Quienessomos } from "./pages/quienessomos";
import { Editusuario } from "./pages/editusuario";
import Recuperacioncontrasena from "./pages/recuperacioncontrasena";
import Casaacogida from "./pages/casaacogida";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Contacto } from "./pages/formulariocontacto";
import { Navbar } from "./component/navbar";
import { Navbaracogida } from "./component/navbaracogida";
import { Registro } from "./pages/registro";

import { FormularioPets } from "./component/formulariopets";
import { perfilUsuario } from "./pages/perfilusuario";
import { Card_protectora } from "./component/card_protectora";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

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
          <Route element={<Quienessomos />} path="/quienessomos" />
          <Route element={<Navbaracogida />} path="/navbaracogida" />
          <Route element={<Protectoralogin />} path="/protectoralogin" />
          <Route element={<Editusuario />} path="/perfilusuario" />
          <Route element={<Card_protectora />} path="/card_protectora" />
          <Route
            element={<Recuperacioncontrasena />}
            path="/recuperacioncontrasena"
          />

          <Route element={<Casaacogida />} path="/casaacogida" />

          <Route element={<FormularioPets />} path="/formulariopets" />
          <Route element={<Single />} path="/single/:theid" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
