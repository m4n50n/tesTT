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
    <div>
      {store.pet_list.map((pet) => {
        return <Cardperros key={pet.id} pet={pet} />;
      })}
      <Perfilusuario />
      <Maps location={location} zoom={18} />
    </div>
  );
};

export default CasaAcogida;
