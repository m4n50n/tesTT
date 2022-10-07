import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/register.css";

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [rol, setRol] = useState("");
  const [avaiability, setAvaiability] = useState("");
  const [animals, setAnimals] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useState("");

  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    if (
      email !== "" &&
      password !== "" &&
      name !== "" &&
      phone !== "" &&
      city !== "" &&
      instagram !== "" &&
      avaiability !== "" &&
      animals !== ""
    ) {
      actions.register(
        email,
        password,
        name,
        phone,
        city,
        instagram,
        avaiability,
        animals
      );
      setLogin("Gracias por registrarte en Kodu");
      if (localStorage.getItem("rol") == 1) {
        navigate("/protectoralogin");
      } else if (localStorage.getItem("rol") == 2) {
        navigate("/casaacogida");
      }
    } else {
      setLogin("Introduzca los datos correctamente");
    }
  };

  const validate = (email) => {
    setErrorMessage("");
    if (!email.includes("@")) {
      setErrorMessage("email is not correct");
    }
  };

  useEffect(() => {
    actions.roles();
  }, []);

  return (
    <>
      <div class="wrapper">
        <div className="form-outline mb-4 text-center">
          <div className="myform">
            <h4 className="protectoraocasa">
              ¿Eres una protectora o casa de acogida?
            </h4>
            <h5 className="tituloregistrate">¡Regístrate!</h5>
            <div className="hola">
              <label></label>
              <select
                className="form-control seleccionar"
                name="rol"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                <option disabled>Seleccione una opción</option>
                {store.roles.map((value, index) => {
                  return (
                    <option className="opcionrol" key={index} value={value.id}>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div action="#">
            <div class="form-group d-flex align-items-center">
              <div class="icon">
                <span class="far fa-user"></span>
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div class="form-group d-flex align-items-center">
              <div class="icon">
                <span class="far fa-envelope"></span>
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div class="form-group d-flex align-items-center">
              <div class="icon">
                <span class="fas fa-key"></span>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>

            <div class="form-group d-flex align-items-center">
              <div class="icon">
                <span class="fas fa-phone"></span>
              </div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Teléfono"
              />
            </div>
            <div class="form-group d-flex align-items-center">
              <div class="icon">
                <span class="fas fa-map-marker-alt"></span>
              </div>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ciudad"
              />
            </div>
            {rol == 1 ? (
              <div class="form-group d-flex align-items-center">
                <div class="icon">
                  <span class="fas fa-instagram"></span>
                </div>
                <input
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Instagram"
                />
              </div>
            ) : null}
          </div>
          {rol == 2 ? (
            <div class="form-group d-flex align-items-center">
              <div class="icon">
                <span class="fa fa-calendar"></span>
              </div>
              <input
                value={avaiability}
                onChange={(e) => setAvaiability(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Disponibilidad de acogida"
              />
            </div>
          ) : null}
          {rol == 2 ? (
            <div class="form-group d-flex align-items-center">
              <div class="icon">
                <span class="fa fa-paw"></span>
              </div>
              <input
                value={animals}
                onChange={(e) => setAnimals(e.target.value)}
                type="text"
                className="form-control"
                placeholder="¿Con qué animales convives?"
              />
            </div>
          ) : null}
        </div>
        {store.isLoading ? (
          <Loader type="" color="#F3C766" height={80} width={80} />
        ) : (
          <div>
            <button
              onClick={(e) => register(e)}
              type="submit"
              className="btn  sub btn-secondary"
            >
              Registrar
            </button>
            <div className="politicaprivacidad">
              <p className="privacidaddatos">
                Aceptas que has leído la
                <a href="#">Política de privacidad</a>
              </p>
            </div>
          </div>
        )}
        <p>{login}</p>{" "}
        <p className="estasregistrado">
          ¿Ya estás registrado? <Link to={"/login"}>Inicia Sesión!</Link>{" "}
        </p>
      </div>
    </>
  );
};
