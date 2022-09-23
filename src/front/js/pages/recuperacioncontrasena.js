import React, { useContext, useRef, useState } from "react";
import { Context } from "../store/appContext";

const Recuperacioncontrasena = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        {" "}
        <h1>¿Has olvidado tu contraseña? </h1>
      </div>
      <div>
        {" "}
        <h3>Por favor introduce la cuenta de email usada para el registro. </h3>
      </div>
      <div class="col-sm-10">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          class="form-control"
          id="inputEmail"
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
