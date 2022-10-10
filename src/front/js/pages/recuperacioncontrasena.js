import React, { useContext, useRef, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/contrasena.css";

const Recuperacioncontrasena = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const sendcontrasena = (e) => {
    e.preventDefault();
    if (email !== "") {
      actions.recuperacioncontrasena(email);
      setMensaje("el correo ha sido enviado");
    } else {
      setMensaje("Introduzca el correo electrónico");
    }
  };

  return (
    <div className="formregister">
      <div className="wrapper ">
        <div className="text-center m-3">
          <div className="titulocontrasena">
            {" "}
            <h4>¿Has olvidado tu contraseña? </h4>
          </div>
          <div className="col-sm-10 mx-auto">
            <form onSubmit={sendcontrasena}>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="email"
              />

              <button
                onClick={() => {
                  actions.recuperacioncontrasena;
                }}
                type="submit"
                className="btn botonrecuperacion"
              >
                Obtén una nueva contraseña
              </button>
            </form>
            <h5 className="mensajecontrasena">{mensaje}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recuperacioncontrasena;
