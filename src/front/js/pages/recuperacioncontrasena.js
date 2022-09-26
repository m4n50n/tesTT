import React, { useContext, useRef, useState } from "react";
import { Context } from "../store/appContext";

const Recuperacioncontrasena = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <div>
        {" "}
        <h2>¿Has olvidado tu contraseña? </h2>
      </div>
      <div>
        {" "}
        <h4>Por favor introduce la cuenta de email usada para el registro. </h4>
      </div>
      <div className="col-sm-10">
        <input
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
            actions.recuperacioncontrasena(email);
          }}
          type="submit"
          className="btn  sub btn-secondary"
        >
          Obtén una nueva contraseña
        </button>
      </div>
    </div>
  );
};

export default Recuperacioncontrasena;
