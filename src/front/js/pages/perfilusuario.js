import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";

export const Perfilusuario = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [avaiability, setAvaiability] = useState("");
  const [animals, setAnimals] = useState("");

  return (
    <div className="formulariousuario container card">
      <div className="card-body">
        <div className="form-group">
          <label></label>
          <input
            type="text"
            defaultValue={store.organizacion.name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Nombre"
          />
        </div>
        <div className="form-group">
          <label></label>{" "}
          <input
            type="text"
            defaultValue={store.organizacion.email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label></label>{" "}
          <input
            type="text"
            defaultValue={store.organizacion.avaiability}
            onChange={(e) => setAvaiability(e.target.value)}
            className="form-control"
            placeholder="Disponibilidad de acogida"
          />
        </div>
        <div className="form-group">
          <label></label>{" "}
          <input
            type="text"
            defaultValue={store.organizacion.animals}
            onChange={(e) => setAnimals(e.target.value)}
            className="form-control"
            placeholder="¿Convives con más animales?"
          />
        </div>
        <div className="form-group">
          <label></label>{" "}
          <input
            type="text"
            defaultValue={store.organizacion.city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            placeholder="Ciudad"
          />
        </div>
        <div className="form-group">
          <label></label>{" "}
          <input
            type="text"
            defaultValue={store.organizacion.city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            placeholder="Ciudad"
          />
        </div>
        <div>
          <button
            onClick={() => {
              actions.editUser(email, name, phone, animals, avaiability, city);
            }}
            className="btn  sub btn-secondary"
          >
            Guardar
          </button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
