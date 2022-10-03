import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Maps from "../component/maps";
import { Cardperros } from "../component/card_pet";
import { Perfilusuario } from "./perfilusuario";

const CasaAcogida = () => {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.pet_list();
  }, []);
  return (
    <div className="container-fluid ">
      <center className="titulomascotas">
        ¿Tienes disponibilidad para ayudar a alguna de estas mascotas? ¡Contacta
        con la protectora!
      </center>
      <div className="casaacogidapet">
        {store.pet_list.map((pet) => {
          return <Cardperros key={pet.id} pet={pet} />;
        })}
      </div>
      <Perfilusuario />
    </div>
  );
};

export default CasaAcogida;
