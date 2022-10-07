import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const buttonSubmit = (e) => {
    e.preventDefault();
    console.log("Hola, soy la función");
    validate(email, password);
    actions.login(email, password, navigate);
  };
  const validate = (email, password) => {
    setErrorMessage("");
    if (!email.includes("@")) {
      setErrorMessage("email is not correct");
    }
  };
  return (
    <>
      <div class="wrapper">
        <div class="card">
          <div onSubmit={buttonSubmit} action="#" class="d-flex flex-column">
            <div class="h3 text-center colorlogin">Login</div>
            <div class="d-flex align-items-center input-field my-3 mb-4">
              <span class="far fa-user p-2"></span>
              <input
                type="email"
                id="form2Example1"
                class="form-control"
                placeholder="email"
                autoComplete="off"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>
            <div class="d-flex align-items-center input-field mb-4">
              <span class="fas fa-lock p-2"></span>
              <input
                type="password"
                id="form2Example2"
                class="form-control"
                placeholder="contraseña"
                autoComplete="off"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <div></div>
            </div>
            <p class="text-danger">{errorMessage}</p>
            <div class="row mb-2">
              <div class="mt-sm-0 mt-3">
                <a href="#">¿Olvidó su contraseña?</a>
              </div>
              <a href="#!">
                <Link to="/recuperacioncontrasenaa"></Link>
              </a>
            </div>
          </div>
        </div>
        <input
          type="submit"
          class="btn btn mb-4 aling-item botonlogin"
          value="Acceder"
        />
        <div class="text-center">
          <p>
            ¿Aun no te has registrado?{" "}
            <a href="#!">
              <Link to="/register">Registrate</Link>
            </a>
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
      </div>
    </>
  );
};
