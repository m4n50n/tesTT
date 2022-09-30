import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "schema-utils";
import { Context } from "../store/appContext";
import Maps from "../component/maps";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const location = {
    address: "Las Palmas de Gran Canaria.",
    lat: 28.09973,
    lng: -15.41343,
  };


  const buttonSubmit = () => {
    validate(email, password);
    actions.login(email, password);

    if (localStorage.getItem("rol") == 2) {
      navigate("protectoralogin/");
    } else if (localStorage.getItem("rol") == 1) {

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
  <>

    <div id="cardlogin">

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


                <label className="form-check-label" htmlFor="form2Example31">

                <label class="form-check-label" for="form2Example31">

                  {" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">
                <Link to="/recuperacioncontraseña">
                  Has olvidado tu contraseña?

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

            className="btn btn-primary btn-block mb-4"
          >
            Sign in
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

      <h1> Mappa</h1>
      <Maps location={location} zoom={18} />
    </>

    </div>

  );
};
