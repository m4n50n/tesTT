import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "schema-utils";
import { Context } from "../store/appContext";

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
      navigate("protectoralogin/");
    } else if (localStorage.getItem("rol") == 2) {
      navigate("casaacogida/");
    }
  };

  const validate = (email, password) => {
    setErrorMessage("");
    if (!email.includes("@")) {
      setErrorMessage("El email no es correcto");
    }
  };

  return (
    <div id="cardlogin">
      <div className="footer mt-auto py-3 text-center">
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
              placeholder="Email"
              autoComplete="off"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            ></input>
            <div>
              <label class="form-label" for="form2Example1"></label>
            </div>
          </div>
          <div class="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              class="form-control, container-xs"
              placeholder="Contraseña"
              autoComplete="off"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            ></input>
            <div>
              <label class="form-label" for="form2Example2"></label>
            </div>
          </div>
          <p className="text-danger">{errorMessage}</p>
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                {/*    //<input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />


              />// */}

                <label class="form-check-label" for="form2Example31">
                  {" "}
                </label>
              </div>
            </div>
            <div class="text-center">
              <a href="#!">
                <Link to="/recuperacioncontrasena">
                  ¿Has olvidado tu contraseña?
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
            class="btn btn-primary btn-block mb-4"
          >
            Acceder
          </button>
          <div class="text-center">
            <p>
              ¿Aún no te has registrado?{" "}
              <a href="#!">
                <Link to="/register">Regístrate</Link>
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
        </form>
      </div>
    </div>
  );
};
