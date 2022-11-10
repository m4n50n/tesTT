import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Mapahome from "../pages/mapahome";
import { Card_casaacogida } from "../component/card_casaacogida";
import "../../styles/protectoralogin.css";

const Protectoralogin = () => {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.casaacogida_list();
  }, []);
  return (
    <div>
      <div className="col-12 col-md-8">
        <Mapahome />
      </div>
      <div className="col-12 col-md-4">
        <center className="titulomapa">
          Publica aquel animal que necesite hogar para que lo encuentren las
          casas de acogida
        </center>
        <div className="mx-auto">
          <Link
            className="btn btn-warning boton-contacta text-white"
            to={"/formulariopets"}
          >
            ¡Registra!
          </Link>
        </div>
      </div>
      <center className="titulomascot">
        ¡Encuentra una casa de acogida para ayudar a las mascotas que publiques!
      </center>

      <div className="testimonial-group box-contenedor organizacioncard">
        {store.casaacogida_list.map((organizacion) => {
          return (
            <Card_casaacogida
              key={organizacion.id}
              organizacion={organizacion}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Protectoralogin;
