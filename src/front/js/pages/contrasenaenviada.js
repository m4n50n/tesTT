import React, { useContext, useRef, useState } from "react";
import { Context } from "../store/appContext";

const Contrasenaolvidada = () => {
  return (
    <div className="text-center">
      <div>
        <h2>
          Revise su correo eletrónico, su contraseña ha sido enviada con éxito{" "}
        </h2>
      </div>
      <div className="col-sm-10">
        <button
          onClick={() => {
            actions.home();
          }}
          type="submit"
          className="btn  sub btn-secondary"
        >
          Kodu
        </button>
      </div>
    </div>
  );
};

export default Contrasenaolvidada;
