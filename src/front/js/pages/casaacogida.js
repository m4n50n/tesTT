import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Mapahome from "../pages/mapahome";
import { Cardperros } from "../component/card_pet";
import { Card_protectora } from "../component/card_protectora";

import "../../styles/casaacogida.css";
import "../../styles/index.css";

const CasaAcogida = () => {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.pet_list();
    actions.organizacion_list();
  }, []);
  return (
    <>
      {/* <Navbaracogida /> */}
      <div className="d-flex">
        <Mapahome />
        <div>
          {" "}
          <center className="titulomapa">kjnkjn</center>
        </div>
      </div>
      <div>
        <center className="titulomascotas">
          ¿Tienes disponibilidad para ayudar a alguna de estas mascotas?
          ¡Contacta con la protectora!
        </center>
        <div className="testimonial-group box-contenedor casaacogidapet">
          {store.pet_list.map((pet) => {
            return <Cardperros key={pet.id} pet={pet} />;
          })}
        </div>
        <center className="titulomascotas">
          ¡Encuentra una protectora cercana a tu ciudad y ayuda como voluntario!
        </center>
        <div className="testimonial-group box-contenedor organizacioncard">
          {store.organizacion_list.map((organizacion) => {
            return (
              <Card_protectora
                key={organizacion.id}
                className="organizacioncard"
                organizacion={organizacion}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CasaAcogida;
