import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
 import { Link, useNavigate } from "react-router-dom";
// import swal from "sweetalert";

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
      // rol !== "" &&
      password !== "" &&
      name !== "" &&
      phone !== "" &&
      city !== ""
    ) {
      actions.register(
        email,
        password,
        name,
        phone,
        city,
        avaiability,
        instagram,
        animals,
        rol
      );
      setLogin("Gracias por registrarte en Kodu");
      if (localStorage.getItem("rol") == 1) {
        swal(
          "¡Bienvenid@ a Kodu! Aquí podrás publicar las mascotas que necesiten un hogar y contactar con las casas de acogida. "
        );
        navigate("/protectoralogin");
      } else if (localStorage.getItem("rol") == 2) {
        swal(
          "¡Bienvenid@ a Kodu! No pierdas tiempo y contacta con la protectora para ofrecerles tu servicios de acogida de algún animal que encuentres en esta página "
        );
        navigate("/casaacogida");
      }
    } else {
      setLogin("Introduzca los datos correctamente");
    }
  };

  const validate = (email) => {
    setErrorMessage("");
    if (!email.includes("@")) {
      setErrorMessage("El email no es correcto");
    }
  };

  useEffect(() => {
    actions.roles();
  }, []);

  return (
    <>
      <div className="wrapper position-relative">
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
                onChange={(e) => {
                  setRol(e.target.value);
                  localStorage.setItem("rol", [e.target.value]);
                }}
              >
                <option disabled selected value="">
                  Seleccione una opción
                </option>
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
            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="far fa-user"></span>
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="far fa-envelope"></span>
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="fas fa-key"></span>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />
            </div>

            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="fas fa-phone"></span>
              </div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Teléfono"
              />
            </div>
            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="fas fa-map-marker-alt"></span>
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
              <div className="form-group d-flex align-items-center">
                <div className="icon">
                  <span className="fab fa-instagram"></span>
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
            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="fa fa-calendar"></span>
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
            <div className="form-group d-flex align-items-center">
              <div className="icon">
                <span className="fa fa-paw"></span>
              </div>
              <input
                value={animals}
                onChange={(e) => setAnimals(e.target.value)}
                type="text"
                className="form-control"
                placeholder="¿Con qué animales convives?"
              />
            </div>
          ) : (
            ""
          )}
        </div>
        {store.isLoading ? (
          <Loader type="" color="#F3C766" height={80} width={80} />
        ) : (
          <div className="registroboton">
            <div className="d-flex justify-content-center">
              <button
                onClick={(e) => register(e)}
                type="submit"
                className="btn btn-secondary botonacceso"
              >
                Registrar
              </button>
            </div>
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
