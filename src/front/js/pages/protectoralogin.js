import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Mapahome from "../pages/mapahome";
import { card_casaacogida } from "../component/card_casaacogida";
import "../../styles/protectoralogin.css";
import { Card_protectora } from "../component/card_protectora";

const Protectoralogin = () => {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.casaacogida_list();
  }, []);
  return (
    <div>
      <div className="col-sm-12 col-md-12 col-xs-12 d-flex">
        <Mapahome />
        <div>
          <center className="titulomascoto">
            Publica aquel animal que necesite hogar para que lo encuentren las
            casas de acogida
          </center>
          <Link to={"/formulariopets"}>
            <button
              type="button"
              className="btn boton-contactos"
              placeholder="Publicar"
            >
              Rellenar formulario
            </button>
          </Link>
        </div>
      </div>
      <center className="titulomascot">
        ¡Encuentra una casa de acogida para ayudar a las mascotas que publiques!
      </center>

      <div className="testimonial-group box-contenedor organizacioncard">
        {store.casaacogida_list.map((organizacion) => {
          return (
            <Card_protectora
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
