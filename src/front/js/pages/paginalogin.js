import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "schema-utils";
import { Context } from "../store/appContext";
import Maps from "../component/maps";
import "../../styles/index.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const buttonSubmit = () => {
    validate(email, password);
    actions.login(email, password);
    if (store.organizacion) {
      loginRol();
    } else {
      loginRol();
    }
  };
  const loginRol = () => {
    if (store.organizacion.rol == 1) {
      navigate("/protectoralogin/");
    } else if (store.organizacion.rol == 2) {
      navigate("/casaacogida/");
    }
  };
  const validate = (email) => {
    setErrorMessage("");
    if (!email.includes("@")) {
      setErrorMessage("email is not correct");
    }
  };
  return (
    <>
      <div className="footer mt-auto py-3 text-center">
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            actions.login(email, password);
          }}
        >
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className="form-control, container-xs"
              placeholder="email"
              autoComplete="off"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            ></input>
            <div>
              <label className="form-label" htmlFor="form2Example1">
                Correo electronico
              </label>
            </div>
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control, container-xs"
              autoComplete="off"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            ></input>
            <div>
              <label className="form-label" htmlFor="form2Example2">
                Contraseña
              </label>
            </div>
          </div>
          <p className="text-danger">{errorMessage}</p>
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                {/*    //<input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              />// */}
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                </label>
              </div>
            </div>
            <div className="col">
              <a href="#!">
                <Link to="/recuperacioncontraseña">
                  Has olvidado tu contraseña?
                </Link>
              </a>
            </div>
          </div>
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
          <div className="text-center">
            <p>
              ¿Aun no te has registrado?{" "}
              <a href="#!">
                <Link to="/register">Registrate</Link>
              </a>
            </p>
            <p></p>
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
        </form>
      </div>
      {/* <h1> Mapa</h1>
      <div className="maps">
        <Maps location={location} zoom={18} />
      </div> */}
    </>
  );
};
