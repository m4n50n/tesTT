import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/editusuario.css";

export const Editusuario = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(store.organizacion.email);
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [avaiability, setAvaiability] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [animals, setAnimals] = useState("");
  const [disabledinput, setDisabledinput] = useState(true);

  const validate = (email) => {
    setErrorMessage("");
    if (!email.includes("@")) {
      alert("Email no válido");
    } else {
      actions.perfilusuario(email, name, phone, animals, avaiability, city);
    }
  };

  return (
    <div className="wrapper">
      {/* <fieldset disabled={!disabledinput ? false : true}> */}
      <div className="h5 font-weight-bold text-center mb-3">
        Perfil casa de acogida
      </div>
      <div className="form-group d-flex align-items-center">
        <div className="icon">
          <span className="fas fa-phone"></span>
        </div>
        <input
          type="text"
          defaultValue={store.organizacion.phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
          placeholder="Teléfono"
        />
      </div>
      <div className="form-group d-flex align-items-center">
        <div className="icon">
          <span className="far fa-envelope"></span>
        </div>
        <input
          type="text"
          defaultValue={store.organizacion.email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div className="form-group d-flex align-items-center">
        <div className="icon">
          <span className="fa fa-calendar"></span>
        </div>
        <input
          type="text"
          defaultValue={store.organizacion.avaiability}
          onChange={(e) => setAvaiability(e.target.value)}
          className="form-control"
          placeholder="Disponibilidad de acogida"
        />
      </div>
      <div className="form-group d-flex align-items-center">
        <div className="icon">
          <span className="fa fa-paw"></span>
        </div>
        <input
          type="text"
          defaultValue={store.organizacion.animals}
          onChange={(e) => setAnimals(e.target.value)}
          className="form-control"
          placeholder="¿Convives con más animales?"
        />
      </div>
      <div className="form-group d-flex align-items-center">
        <div className="icon">
          <span className="fas fa-map-marker-alt"></span>
        </div>
        <input
          type="text"
          defaultValue={store.organizacion.city}
          onChange={(e) => setCity(e.target.value)}
          className="form-control"
          placeholder="Ciudad"
        />
      </div>
      {/* </fieldset> */}
      {disabledinput ? (
        <button
          onClick={() => {
            setDisabledinput(false);
          }}
          className="btn  sub btn-secondary"
        >
          Editar
        </button>
      ) : (
        <button
          onClick={() => {
            validate(email);
          }}
          className="btn  sub btn-secondary"
        >
          Guardar
        </button>
      )}

      <div className="mb-2"></div>
    </div>
  );
};
