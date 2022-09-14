import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Login } from "./pages/paginalogin";
import Protectoralogin from "./pages/protectoralogin";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import Accesologin from "./pages/accesologin";
import Vistamodificaciondatos from "./pages/vistamodificaciondatos";
import Recuperacioncontraseña from "./pages/recuperacioncontraseña";
import { Single } from "./pages/single";
import { Register } from "./pages/formularioregistro";
import injectContext from "./store/appContext";
import CasaAcogida from "./pages/vistacaacogida";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { FormularioPets } from "./pages/formulariopets";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Accesologin />} path="/accesologin" />
            <Route element={<Protectoralogin />} path="/protectoralogin" />
            <Route
              element={<Vistamodificaciondatos />}
              path="/vistamodificaciondatos"
            />
            <Route
              element={<Recuperacioncontraseña />}
              path="/recuperacioncontraseña"
            />
            <Route element={<CasaAcogida />} path="/casaacogida" />
            <Route element={<FormularioPets />} path="/formulariopets" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
