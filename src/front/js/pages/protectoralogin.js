import React from "react";
import { CasaAcogida } from "../component/card_casaacogida";
const Protectoralogin = () => {
  return (
    <>
      <div>
        <CasaAcogida />
        <button type="button" className="btn btn-primary btn-lg btn">
          {" "}
          Registra a la mascota que necesite hogar
        </button>
        <h1>
          Contacta con las casas de acogida para que ninguna mascota se quede
          sin hogar
        </h1>
        Casas de acogida .
      </div>
    </>
  );
};
export default Protectoralogin;
