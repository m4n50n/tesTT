import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "schema-utils";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const buttonSubmit = () => {
    validate(email, password);
    actions.login(email, password);
    if (localStorage.getItem("rol") == 1) {
      navigate("/protectoralogin");
    } else if (localStorage.getItem("rol") == 2) {
      navigate("/casaacogida");
    }
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
              <Link className="colortexto" to="/recuperacioncontrasena">
                {" "}
                ¿Olvidó su contraseña?
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            onClick={() => {
              validate(email, password);
              actions.login(email, password);

              buttonSubmit();
            }}
            class="btn btn-primary btn-block mb-4"
          >
            Acceder
          </button>
        </div>
        <div class="text-center">
          <p>
            ¿Aún no te has registrado? <Link to="/register">Regístrate</Link>
          </p>
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
