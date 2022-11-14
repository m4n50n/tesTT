import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/editusuario.css";

export const Perfilprotectora = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(store.organizacion.email);
  const [phone, setPhone] = useState(store.organizacion.phone);
  const [city, setCity] = useState(store.organizacion.city);
  const [instagram, setInstagram] = useState(store.organizacion.Instagram);
  const [errorMessage, setErrorMessage] = useState("");
  const [disabledinput, setDisabledinput] = useState(true);

  useEffect(() => {
    defaultState();
  }, []);
  const validate = () => {
    setErrorMessage("");
    if (!email.includes("@")) {
      alert("Email no válido");
    } else {
      actions.perfilprotectora(email, name, phone, instagram, city);
      setDisabledinput(true);
    }
  };
  const defaultState = async () => {
    setPhone(store.organizacion.phone);
    setEmail(store.organizacion.email);
    setInstagram(store.organizacion.instagram);
    setCity(store.organizacion.city);
  };
  return (
    <div className="wrapper">
      <fieldset disabled={!disabledinput ? false : true}>
        <div className="h5 font-weight-bold text-center mb-3">
          Perfil protectora
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
            <span className="fab fa-instagram"></span>
          </div>
          <input
            type="text"
            defaultValue={store.organizacion.instagram}
            onChange={(e) => setInstagram(e.target.value)}
            className="form-control"
            placeholder="Instagram"
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
      </fieldset>
      {disabledinput ? (
        <button
          onClick={() => {
            defaultState();
            setDisabledinput(false);
          }}
          className="btn  sub btn-secondary botonaccesouser"
        >
          Editar
        </button>
      ) : (
        <button
          onClick={() => {
            defaultState();
            validate(email);
          }}
          className="btn  sub btn-secondary botonaccesouser"
        >
          Guardar
        </button>
      )}

      <div className="mb-2"></div>
    </div>
  );
};
