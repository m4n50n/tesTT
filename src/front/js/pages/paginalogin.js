import React, { useContext, useState } from "react";
import { validate } from "schema-utils";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [erorrMessage, setErrorMessage] = useState("");

  const validate = (email, password) => {
    setErrorMessage ("")
    if (!email.includes("@")) {
      setErrorMessage("email is not correct");
    }
  };

  return (
    <login className="footer mt-auto py-3 text-center">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          actions.login(email, password);
        }}
      >
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            class="form-control, container-xs"
            placeholder="email"
            autoComplete="off"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          ></input>
          <div>
            <label class="form-label" for="form2Example1">
              Correo electronico
            </label>
          </div>
        </div>
        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            class="form-control, container-xs"
            autoComplete="off"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          ></input>
          <div>
            <label class="form-label" for="form2Example2">
              Contraseña
            </label>
          </div>
        </div>
        <p className="text-danger">{erorrMessage}</p>
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
           
              <label class="form-check-label" for="form2Example31">
                {" "}
                {" "}
              </label>
            </div>
          </div>
          <div class="col">
            <a href="#!">Has olvidado tu contraseña?</a>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            validate(email, password);
            actions.register(email, password); 
          }}
          class="btn btn-primary btn-block mb-4"
        >
          Sign in
        </button>
        <div class="text-center">
          <p>
          ¿Aun no te has registrado? <a href="#!">Registrate</a>
          </p>
          <p></p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-instagram"></i>
          </button>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>
        </div>
      </form>
    </login>
  );
};
