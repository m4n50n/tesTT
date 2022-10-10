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
    actions.login(email, password, navigate);
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
      <div className="wrapper">
        <div className="card">
          <div
            onSubmit={buttonSubmit}
            action="#"
            className="d-flex flex-column"
          >
            <div className="h3 text-center colorlogin">Login</div>
            <div className="d-flex align-items-center input-field my-3 mb-4">
              <span className="far fa-user p-2"></span>
              <input
                type="email"
                id="form2Example1"
                className="form-control"
                placeholder="email"
                autoComplete="off"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>
            <div className="d-flex align-items-center input-field mb-4">
              <span className="fas fa-lock p-2"></span>
              <input
                type="password"
                id="form2Example2"
                className="form-control"
                placeholder="contraseña"
                autoComplete="off"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <div></div>
            </div>
            <p className="text-danger">{errorMessage}</p>
            <div className="row mb-2">
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
            className="btn btn-primary btn-block mb-4"
          >
            Acceder
          </button>
        </div>
        <div className="text-center">
          <p>
            ¿Aún no te has registrado? <Link to="/register">Regístrate</Link>
          </p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-instagram"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>
        </div>
      </div>
    </>
  );
};
