import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

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
    </div>
  );
};

export default CasaAcogida;
